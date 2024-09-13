import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() userLogin: Login;
  constructor(private authService: AuthService, private router: Router) {
      this.userLogin = new Login;
   }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.userLogin.email, this.userLogin.password)
    .subscribe({
        next: (response) =>{
            localStorage.setItem('token', response.token);
            this.router.navigate(['dashboard']);
        }, 
        error: (error) =>{
            console.error('Login failed', error);
            alert('Login failed. Please try again.');
        }
    })
  }

}
