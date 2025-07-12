import { Injectable } from '@angular/core';

const USER_KEY = 'app-user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  constructor() {}

  // Save user object to localStorage
  setUser(user: any): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // Get user object from localStorage
  getUser(): any | null {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // Remove user object from localStorage (logout)
  clearUser(): void {
    localStorage.removeItem(USER_KEY);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem(USER_KEY);
  }
}
