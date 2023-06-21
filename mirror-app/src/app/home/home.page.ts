import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(public mirrorService: MirrorService) {}

  addPhotoToGallery() {
    this.mirrorService.addNewToGallery();
  }
}
