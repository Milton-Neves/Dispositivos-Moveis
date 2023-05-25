import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = '8b43e96d';

  constructor(private http: HttpClient) {}

  searchMovies(title: string) {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${title}`;
    return this.http.get(url);
  }

  getMovie(title: string) {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${title}`;
    return this.http.get(url);
  }
}
