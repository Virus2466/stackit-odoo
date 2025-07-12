import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/localstorage-service';
import { Auth } from '../service/auth';
import { log } from 'console';
import { AuthResponse } from '../../model/interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css'],
  imports: [ReactiveFormsModule],
})
export class SignIn {
  signInForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: Auth
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signInForm.invalid) return;

    // Dummy authentication logic (replace with real API)
    this.authService.signIn(this.signInForm.value).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
        this.localStorageService.setUser(res);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
      },
    });
  }
}
