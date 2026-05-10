import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Entry } from '../models/entry';
import { toSignal } from '@angular/core/rxjs-interop';
import { EntryResponse } from '../models/entry-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private http = inject(HttpClient); // lägg till httpClient så att det går att kommunicera med api
  url: string = "http://localhost:3000/entries";

  //Hämtar entries från api och gör om observable till signal
  getEntries(): Signal<Entry[]> {
    const entries$ = this.http.get<Entry[]>(this.url);
    return toSignal(entries$, { initialValue: [] }); // Ang reagerar automatiskt när data ändras
  }

  // skapa nytt inlägg
  addEntry(entry: Entry): Observable<EntryResponse> {
    const token = localStorage.getItem("token"); // hämta token från local storage

    //skapa header
    const headers = {
      "Authorization": `Bearer ${token}`
    };

    // skicka POST-request till backend
    return this.http.post<EntryResponse>(this.url, entry, { headers });
  }
}
