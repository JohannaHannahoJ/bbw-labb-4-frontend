import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RegisterResponse } from '../models/register-response';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username: string = "";
  password: string = "";

  message = signal(""); // För meddelanden i frontend
  authService = inject(AuthService); // används för att kunna anropa backends auth routes

  // körs när anv. skickar formuläret
  register(): void {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.register(user).subscribe({
      next: (response: RegisterResponse) => {
        this.message.set(response.message)
        this.username = "";
        this.password = "";
      },

      error: (error) => {
        this.message.set(error.error.message)
      }
    });
  }

}
