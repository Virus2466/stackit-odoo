import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn implements OnInit {
  constructor(private authService: Auth) {}
  ngOnInit(): void {
    this.authService
      .signUp({ username: 'anothertesterman', email: 'test222222222@gmail.com', password: 'hellotest' })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
