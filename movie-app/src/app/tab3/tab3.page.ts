import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab3Page {
  favoritos: any[];
  constructor(private movieService: MovieService) {
    this.favoritos = [];
    this.getFilms();
  }

  getFilms() {
    this.favoritos = this.movieService.getFavorites();
  }
}
