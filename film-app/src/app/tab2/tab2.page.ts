import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  movie: any;
  searchTerm: string = '';

  constructor(private movieService: MovieService) {}

  searchMovie() {
    this.movieService.getMovie(this.searchTerm).subscribe((response: any) => {
      this.movie = response;
    });
  }
}
