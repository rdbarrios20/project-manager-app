import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private router: Router, private http: HttpClient) { }

  login(email: string, password: string): Observable<{ token: string }>{
    return this.http.post<{ token: string }>(`${this.apiUrl}auth/login`, { email, password });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
}
