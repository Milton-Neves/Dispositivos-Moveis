import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Filme } from '../model/filmes';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  movies: Filme[];
  constructor(private movieService: MovieService) {
    this.movies = [];
  }

  searchMovies(text: IonInput) {
    let texto = JSON.stringify(text.value);
    this.movieService.searchMovies(texto).subscribe((res) => {
      this.movies = Object.values(res)[0];
      this.favoriteFilme(this.movies);
    });
  }

  favoriteFilme(movies: any) {
    for (let index = 0; index < this.movies.length; index++) {
      movies[index].Favorito = false;
    }
  }

  favorite(movies: any) {
    movies.Favorito = true;
    this.movieService.setFavorites(movies);
  }
}
