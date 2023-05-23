import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string;
  apikey: string;
  favoritos: any[];
  constructor(private http: HttpClient) {
    this.apikey = '1c5281b2';
    this.url = 'https://www.omdbapi.com/?';
    this.favoritos = [];
  }

  exactFilm(text: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}apikey=${this.apikey}&t=${text}`);
  }

  getFilmeAll(text: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}apikey=${this.apikey}&s=${text}`);
  }

  getFavorites() {
    return this.favoritos;
  }

  verificarDuplicidade(filme: Movie): boolean {
    if (this.favoritos.find((element) => element === filme)) {
      return true;
    }
    return false;
  }

  setFavoritos(filme: any) {
    !this.verificarDuplicidade(filme) ? this.favoritos.push(filme) : null;
  }
}
