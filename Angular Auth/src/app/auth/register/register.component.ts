import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterCredentials } from 'src/app/types/AuthTypes';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    email: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(/^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/)
    ]],
    repass: ['', [
      Validators.required,
    ]]
  });

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  invalidForm: boolean | undefined;
  errorMessage: string = '';

  register() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'The form you have submitted is invalid';
      return;
    }

    const credentials: RegisterCredentials = this.registerForm.value;

    this.registerService.register(credentials).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }
}