import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Filme } from '../model/filmes';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  movie: Filme;
  constructor(private movieService: MovieService) {
    this.movie = new Filme();
    this.movie.Favorito = false;
  }

  getExactMovie(text: IonInput) {
    let texto = JSON.stringify(text.value);
    this.movieService.getExactMovie(texto).subscribe((res) => {
      texto === '' ? null : (this.movie = res);
    });
  }

  favorite(movie: any) {
    movie.Favorito = true;
    this.movieService.setFavorites(movie);
  }
}
