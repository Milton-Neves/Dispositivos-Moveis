import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  favoritos: any[];
  constructor(private movieService: MovieService) {
    this.favoritos = [];
    this.getMovies();
  }

  getMovies() {
    this.favoritos = this.movieService.getFavoriteMovies();
  }
}
