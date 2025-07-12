import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoint } from './end-point';
import { Question, QuestionFormData } from '../model/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private endPoint: EndPoint) {}

  getQuestion() {
    return this.http.get<Question[]>(this.endPoint.GET_QUESTIONS);
  }

  postQuestion(res: QuestionFormData) {
    return this.http.post(this.endPoint.POST_QUESTIONS, res);
  }

  getQuestionById(id: string) {
    return this.http.get(this.endPoint.GET_QUESTION_BY_ID + id);
  }
}
