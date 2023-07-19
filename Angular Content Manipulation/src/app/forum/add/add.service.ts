import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postForm } from 'src/app/types/Post';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  addPost(data: postForm) {
    const url = 'http://localhost:3000/posts/add';
    const headers = {
      'Content-Type': 'application/json'
    }

    return this.http.post(url, data, { headers });
  }
}
