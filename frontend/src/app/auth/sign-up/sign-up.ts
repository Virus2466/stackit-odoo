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
import { Roles } from '../../model/interface';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  signUpForm!: FormGroup;
  errorMessage: string | null = null;
  roles:Roles = Roles.GUEST;
  uiRoles:string[] = [Roles.ADMIN,Roles.GUEST,Roles.USER]
  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private authService: Auth,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      role: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) return;
    this.authService.signUp(this.signUpForm.value).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
        this.localStorageService.setUser(res);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
