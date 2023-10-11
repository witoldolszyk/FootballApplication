import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Standing } from '../models/standing.interface';
import { StoredData } from '../models/stored.interface';

@Injectable({
  providedIn: 'root'
})
export class FootballLeagueResultsService {

  readonly season: string = new Date().getFullYear().toString();
  readonly apiUrl: string = 'https://v3.football.api-sports.io';
  readonly headers: HttpHeaders = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': environment.apiKey
  });

  constructor(private http: HttpClient) { }

  private setLocalStorage(leagueId: number, data: Standing): void {
    const expirationDate: Date = new Date(Date.now() + 12 * 60 * 60 * 1000);  

    const storageData: StoredData = {
      expiration: expirationDate.toISOString(),
      data: data
    };

    localStorage.setItem(`league_${leagueId}`, JSON.stringify(storageData));
  }

  private getFromLocalStorage(leagueId: number): Standing | null {
    const storedData: string | null = localStorage.getItem(`league_${leagueId}`);
    if (!storedData) return null;

    const parsedData: StoredData = JSON.parse(storedData);
    const expirationDate: Date = new Date(parsedData.expiration);

    if (new Date() >= expirationDate) {
      localStorage.removeItem(`league_${leagueId}`);
      return null;
    }

    return parsedData.data;
  }

  fetchLeagueResults(leagueId: number): Observable<Standing> {
    const cachedData: Standing | null = this.getFromLocalStorage(leagueId);
    if (cachedData) return of(cachedData);  

    return this.http.get<Standing>(`${this.apiUrl}/standings?league=${leagueId}&season=${this.season}`, { headers: this.headers }).pipe(
      tap(data => this.setLocalStorage(leagueId, data)),
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }
}
