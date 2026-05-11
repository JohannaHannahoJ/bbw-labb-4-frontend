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
  url: string = "https://bbw-labb-4-db.onrender.com/entries";

  // funktion för headers och token för auth
  private getHeaders() {
    const token = localStorage.getItem("token"); // hämta token fr ls
    return {
      "Authorization": `Bearer ${token}` // skapa headers
    };
  }

  //Hämtar entries från api och gör om observable till signal
  getEntries(): Signal<Entry[]> {
  
    // GET-request med auth headers
    const entries$ = this.http.get<Entry[]>(this.url, { headers: this.getHeaders() });
    // gör om observable till signal
    return toSignal(entries$, { initialValue: [] });
  }

  // skapa nytt inlägg
  addEntry(entry: Entry): Observable<EntryResponse> {

    // skicka POST-request med auth headers
    return this.http.post<EntryResponse>(this.url, entry, { headers: this.getHeaders() });
  }
}
