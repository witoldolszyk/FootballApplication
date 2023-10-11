import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FixtureData } from '../models/fixture.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamResultsDataService {

  readonly currentDate: string = new Date().getFullYear().toString();
  readonly apiUrl: string = 'https://v3.football.api-sports.io';
  readonly headers: HttpHeaders = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': environment.apiKey
  });

  constructor(private http: HttpClient) { }

  private setLocalStorage(key: string, data: FixtureData): void {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(`${key}_time`, String(new Date().getTime()));
  }

  private getFromLocalStorage(key: string): FixtureData | null {
    const storedData: string | null = localStorage.getItem(key);
    if (!storedData) return null;

    const cachedTime: string | null = localStorage.getItem(`${key}_time`);
    const currentTime: number = new Date().getTime();

    if (currentTime - (cachedTime ? Number(cachedTime) : 0) > 12 * 60 * 60 * 1000) {
      localStorage.removeItem(key);
      return null;
    }

    return JSON.parse(storedData);
  }

  fetchRoundsForSeason(league: number): Observable<FixtureData> {
    const storageKey: string = `rounds_${this.currentDate}_${league}`;
    const cachedData: FixtureData | null = this.getFromLocalStorage(storageKey);
    
    if (cachedData) return of(cachedData);  

    return this.http.get<FixtureData>(`${this.apiUrl}/fixtures?season=${this.currentDate}&team=${league}`, { headers: this.headers }).pipe(
      tap(data => this.setLocalStorage(storageKey, data))
    );
  }
}
