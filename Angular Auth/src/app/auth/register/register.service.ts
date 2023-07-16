import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { baseUrl } from 'src/app/constants/constants';
import { RegisterCredentials } from 'src/app/types/AuthTypes';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(credentials: RegisterCredentials) {
    if (credentials.username === '' || credentials.email === '' || credentials.password === '' || credentials.repass === '') {
      return throwError(() => {
        return 'All fields are required!';
      });
    }

    if (credentials.password !== credentials.repass) {
      return throwError(() => {
        return 'Passwords must match!';
      });
      
    }

    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(`${baseUrl}register`, { ...credentials }, { headers });
  }
}
