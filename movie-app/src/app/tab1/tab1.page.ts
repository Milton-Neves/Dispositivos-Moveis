import { Component } from '@angular/core';
import { IonicModule, IonInput } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  movie!: Movie[];
  constructor(private movieService: MovieService) {
    this.movie = [];
  }

  getFilmeAll(text: IonInput) {
    let texto = JSON.stringify(text.value);
    this.movieService.getFilmeAll(texto).subscribe((res) => {
      this.movie = Object.values(res)[0];
      this.favoriteFilm(this.movie);
    });
  }

  favoriteFilm(movie: any) {
    for (let index = 0; index < this.movie.length; index++) {
      movie[index].Favorito = false;
    }
  }

  favorite(movie: any) {
    movie.Favorito = true;
    this.movieService.setFavoritos(movie);
  }
}
