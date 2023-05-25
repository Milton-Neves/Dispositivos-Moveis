import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  favorites: any[] = [];

  constructor() {}

  ionViewWillEnter() {
    this.loadFavorites();
  }

  loadFavorites() {
    // Ainda falta implementar o código para carregar os filmes favoritos
  }
}
