import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExpensesTypeEnum } from '../enum/expensesType.enum';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ExpensesService } from '../service/expenses.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ExploreContainerComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class Tab1Page {
  formGroup: FormGroup;
  tipo: string[];
  isAlertOpen = false;
  public alertButtons = ['OK'];
  valorMotivo: any;
  message: string;
  date: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public expensesService: ExpensesService
  ) {
    this.message = '';
    this.date = new Date().toISOString();
    this.formGroup = this.formBuilder.group({
      motivo: ['', [Validators.required]],
      valor: [0.0, [Validators.required]],
      tipo: [ExpensesTypeEnum.OUTRO, [Validators.required]],
      data: [this.date, [Validators.required]],
      desconto: [0.0, [Validators.required]],
    });
    this.valorMotivo = this.formGroup.value.motivo;
    this.tipo = Object.values(ExpensesTypeEnum);
    this.date = this.formGroup.value.date;
  }

  ngOnInit() {}

  setOpen(isOpen: boolean): void {
    this.isAlertOpen = isOpen;
  }

  addExpenses(): boolean {
    if (
      this.valorMotivo !== null &&
      this.formGroup.valid &&
      !this.expensesService.checkDuplicity(this.formGroup.value)
    ) {
      this.expensesService.addExpense(this.formGroup.value);
      this.message = 'Informação cadastrada com sucesso.';
      this.setOpen(true);
      return true;
    } else {
      this.message = 'Informação duplicada. Por favor, informe outra.';
      this.setOpen(true);
      return false;
    }
  }

  seeExpenses(): void {
    this.router.navigate(['/tabs/tab2']);
  }

  clear(): void {
    this.formGroup.setValue({
      motivo: '',
      valor: 0.0,
      tipo: ExpensesTypeEnum.OUTRO,
      data: new Date().toISOString(),
      desconto: 0.0,
    });
  }

  setDate(): void {
    this.formGroup.value.data = this.formGroup.value.data
      .substring(0, 16)
      .split('T')
      .join(' ');
    this.date = this.formGroup.value.data;
  }
}
