import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  username: string = "";
  password: string = "";

  message = signal("");
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    const msg = localStorage.getItem("flashMessage");

    if (msg) {
      this.message.set(msg);
      localStorage.removeItem("flashMessage");
    }
  }

  login(): void {
    const user: User = {
      username: this.username,
      password: this.password
    }

    this.authService.login(user).subscribe({
      next: (response: LoginResponse) => {
        localStorage.setItem("flashMessage", "Välkommen " + this.username + "!");
        localStorage.setItem("token", response.token);

        this.router.navigate(["/dashboard"]);
      },

      error: (error) => {
        this.message.set(error.error.message);
      }
    });
  }
}