import { Injectable } from '@angular/core';
import { BASE_URL } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class EndPoint {
  baseUrl = BASE_URL;

  SIGN_UP = this.baseUrl + 'api/auth/register';
  SIGN_IN = this.baseUrl + 'api/auth/login';
  GET_QUESTIONS = this.baseUrl + 'api/questions/';
  GET_QUESTION_BY_ID = this.baseUrl + 'api/questions/';
  POST_QUESTIONS = this.baseUrl + 'api/questions';
}
