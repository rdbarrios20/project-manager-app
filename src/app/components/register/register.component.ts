import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService, private router: Router) { 
    this.user = new User;
  }

  ngOnInit(): void {
  }
  
  register(){
    this.userService.register(this.user)
    .subscribe({
        next: () => {
            alert('User: ' + this.user.name + ' was successfully created');
            this.router.navigate(['dashboard']);
        },
        error: (error) => {
            console.error('Register failed', error);
            alert('register process failed. Please try again.');
        }
    })
  }

}
