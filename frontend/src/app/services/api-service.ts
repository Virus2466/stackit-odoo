import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoint } from './end-point';
import { QuestionFormData } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private endPoint: EndPoint) {}

  getQuestion() {}

  postQuestion(res: QuestionFormData) {
    return this.http.post(this.endPoint.POST_QUESTIONS, res);
  }
}
