import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoint } from '../../services/end-point';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../model/interface';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient, private endPoint: EndPoint) {}

  signUp(res: { userName: string; email: string; password: string }) {
    return this.http.post(this.endPoint.SIGN_UP, res);
  }
  signIn(res: { email: string; password: string }):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.endPoint.SIGN_IN, res);
  }
}
