import { Component } from '@angular/core';
import { IonicModule, IonInput } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab2Page {
  movie: Movie;
  constructor(private movieService: MovieService) {
    this.movie = new Movie();
    this.movie.Favorito = false;
  }

  exactFilm(text: IonInput) {
    let texto = JSON.stringify(text.value);
    this.movieService.exactFilm(texto).subscribe((res) => {
      texto === '' ? null : (this.movie = res);
    });
  }

  favorite(movie: any) {
    movie.Favorito = true;
    this.movieService.setFavoritos(movie);
  }
}
