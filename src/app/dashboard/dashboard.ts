import { Component, inject, signal } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  message = signal("");

  entryService = inject(EntryService);
  entries = this.entryService.getEntries();

  ngOnInit() {
    const msg = localStorage.getItem("flashMessage");

    if (msg) {
      this.message.set(msg);
      localStorage.removeItem("flashMessage");
    }
  }
}
