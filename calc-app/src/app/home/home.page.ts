import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { start } from 'repl';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  expressao: string;
  resultado: number;

  constructor() {
    this.expressao = '';
    this.resultado = 0;
  }

  limpar() {
    this.expressao = '';
  }

  addZero() {
    this.expressao += '0';
  }

  openParentese() {
    this.expressao += '(';
  }
  closeParentese() {
    this.expressao += ')';
  }

  addPoint() {
    this.expressao += '.';
  }

  addUm() {
    this.expressao += '1';
  }
  addDois() {
    this.expressao += '2';
  }
  addTres() {
    this.expressao += '3';
  }
  addQuatro() {
    this.expressao += '4';
  }
  addCinco() {
    this.expressao += '5';
  }
  addSeis() {
    this.expressao += '6';
  }
  addSete() {
    this.expressao += '7';
  }
  addOito() {
    this.expressao += '8';
  }
  addNove() {
    this.expressao += '9';
  }
  somar() {
    this.expressao += '+';
  }
  subtrair() {
    this.expressao += '-';
  }
  multiplicar() {
    this.expressao += '*';
  }
  dividir() {
    this.expressao += '/';
  }

  backspace() {
    this.expressao = this.expressao.substring(0, this.expressao.length - 1);
  }

  calcular() {
    this.resultado = eval(this.expressao);
    this.expressao = this.resultado.toString();
  }
}
