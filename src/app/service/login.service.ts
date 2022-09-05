import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  login(data: FormGroup) {
    return this.http.post(`${this.url}/login`, data, {observe: 'response'})
  }

  register(data: FormGroup) {
    return this.http.post(`${this.url}/register`, data, {observe: 'response'})
  }
}
