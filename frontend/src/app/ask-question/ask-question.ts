import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api-service';
import { log } from 'console';
@Component({
  selector: 'app-ask-question',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './ask-question.html',
  styleUrl: './ask-question.css',
})
export class AskQuestion implements OnInit {
  questionForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm() {
    this.questionForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.questionForm.invalid) return;
    this.apiService.postQuestion(this.questionForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.questionForm.reset();
      },
      error:(err)=>{
        console.log(err.error.message);
      }
    });
    console.log(this.questionForm.value);
  }
}
