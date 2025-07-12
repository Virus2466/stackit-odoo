import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoint } from '../../services/end-point';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient, private endPoint: EndPoint) {}

  signUp(res: {}) {
    return this.http.post(this.endPoint.SIGN_UP, res);
  }
}
