import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { RouterLink } from '@angular/router';
=======
import { Router, RouterLink } from '@angular/router';
>>>>>>> Stashed changes
import { LocalStorageService } from '../services/localstorage-service';
import { ApiService } from '../services/api-service';
import { Question } from '../model/interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, JsonPipe],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  questions: Question[] = [];
  isUserLoggedIn: boolean = false;

  constructor(
    private localStorage: LocalStorageService,
<<<<<<< Updated upstream
    private apiService: ApiService
=======
    private apiService: ApiService,
    private router:Router
>>>>>>> Stashed changes
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.localStorage.isLoggedIn();
    this.setQuestion();
  }

  setQuestion() {
    this.apiService.getQuestion().subscribe({
      next: (res) => {
        console.log(res);
        this.questions = res;

        console.log(this.questions);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClick(id:string){
<<<<<<< Updated upstream

=======
    this.router.navigate([`answer/${id}`]);
>>>>>>> Stashed changes
  }
}
