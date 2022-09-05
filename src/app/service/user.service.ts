import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaz/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/api/users';

  public user: User = {
    id: -1,
    name: "",
    lastname: "",
    phone_number: "",
    email: "",
    password: "",
    createdAt: "",
    updatedAt: ""
  }

  constructor(private http: HttpClient) { 

  }

  public get myuser() {
    return this.user;
  }

  getUserById(id: number) {
    return this.http.get(`${this.url}/${id}`)
  }

  getUserByEmail(email: string) {
    return this.http.post(`${this.url}`, {email})
  }

  public set ouruser(user: User) {
    this.user = user
  }
}
