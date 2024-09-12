import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UrlApi = 'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) { }

  login(_email: any, _password: any){
    const param = {
        email: _email,
        password: _password
    };
    const data = this.httpClient.post(this.UrlApi + 'login', param)
    .pipe(
        map(response => {
            return response;
        })
    )
    return data;
  }
}
