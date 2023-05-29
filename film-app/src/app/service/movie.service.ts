import { Injectable } from '@angular/core';
import { Filme } from '../model/filmes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl: string;
  apiKey: string;
  favorites: any[];

  constructor(private http: HttpClient) {
    this.apiKey = '8b43e96d';
    this.apiUrl = 'http://www.omdbapi.com/';
    this.favorites = [];
  }

  searchMovies(title: string) {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${title}`;
    return this.http.get(url);
  }

  getExactMovie(text: string): Observable<Filme> {
    return this.http.get<Filme>(
      `${this.apiUrl}apikey=${this.apiKey}&t=${text}`
    );
  }

  getFavoriteMovies() {
    return this.favorites;
  }

  verificarDuplicidade(filme: Filme): boolean {
    if (this.favorites.find((element) => element === filme)) {
      return true;
    }
    return false;
  }

  setFavorites(filme: any) {
    !this.verificarDuplicidade(filme) ? this.favorites.push(filme) : null;
  }

  // getMovie(title: string) {
  //   const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${title}`;
  //   return this.http.get(url);
  // }
}
