export interface QuestionFormData {
  title: string;
  description: string;
  tags: string;
}


export interface AuthResponse {
  token: string;
  user: User;
  roles: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export enum Roles {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export interface Question {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  answers: string[]; // assuming you will define Answer type separately
  createdAt: string; // or Date if you convert
  updatedAt: string;
  __v: number;
}