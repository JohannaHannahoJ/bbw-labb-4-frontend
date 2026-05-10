import { Component, inject, signal } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { Entry } from '../models/entry';
import { EntryResponse } from '../models/entry-response';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-entry',
  imports: [FormsModule],
  templateUrl: './create-entry.html',
  styleUrl: './create-entry.css',
})
export class CreateEntry {
  message = signal("");
  entryService = inject(EntryService);
  router = inject(Router);

  content: string = "";

  addEntry(): void {
    const entry: Entry = {
      content: this.content,
    };

    this.entryService.addEntry(entry).subscribe({
      next: (response: EntryResponse) => {
        localStorage.setItem("flashMessage", response.message);
        this.router.navigate(["/dashboard"]);
      },

      error: (err) => {
        this.message.set(err.error?.message ?? "Ett okänt fel uppstod.")
      }
    });
  }
}
