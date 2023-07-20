import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginCredentials } from 'src/app/types/AuthTypes';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
  });

  invalidForm: boolean | undefined;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // this.loginForm.valueChanges.subscribe(console.log);
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'The form you have submitted is invalid!';
      return;
    }

    const credentials: LoginCredentials = this.loginForm.value;

    this.loginService.login(credentials).subscribe({
      next: (response) => {
        const token = String(response);
        this.localStorageService.set('authToken', token);
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }
}