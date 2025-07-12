import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-answercomponent',
  templateUrl: './answercomponent.html',
  styleUrls: ['./answercomponent.css'],
})
export class Answercomponent implements OnInit {
  questionId: string | null = null;
  questionRes: any;

  constructor(private route: ActivatedRoute, private apiuService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.questionId = params.get('id');
    });
    this.getQuestion();
  }
  getQuestion() {
    if (!this.questionId) return;
    this.apiuService.getQuestionById(this.questionId).subscribe({
      next: (res) => {
        this.questionRes = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
