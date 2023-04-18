import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class HomePage {
  resultado: number;
  mensagem: string;
  cor: string;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resultado = 0;
    this.mensagem = '';
    this.cor = '#fff';
    this.formGroup = fb.group({
      alcool: ['', [Validators.required]],
      gasolina: ['', [Validators.required, Validators.min(0.1)]],
    });
  }
  calcular() {
    const precos = this.formGroup.value;
    this.resultado = +precos.alcool / +precos.gasolina;
    if (this.resultado <= 0.7) {
      this.mensagem = 'Melhor abastecer com álcool!';
      this.cor = 'success';
    } else {
      this.mensagem = 'Melhor abastecer com gasolina!';
      this.cor = 'tertiary';
    }
  }
  limpar() {
    this.formGroup.setValue({ alcool: '', gasolina: '' });
    this.cor = '#fff';
    this.mensagem = '';
    this.resultado = 0;
  }
}
