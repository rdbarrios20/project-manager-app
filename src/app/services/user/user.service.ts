import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.urlApi + 'auth/register', user);
  }
}
