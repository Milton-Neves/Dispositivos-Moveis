import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Filme } from '../model/filmes';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  movies: Filme[] = [];
  searchTerm: string = '';

  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movieService
      .searchMovies(this.searchTerm)
      .subscribe((response: any) => {
        this.movies = response.Search || [];
      });
  }
}
