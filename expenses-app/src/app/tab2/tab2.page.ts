import { ExpensesService } from './../service/expenses.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Expense } from '../model/expenses';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab2Page {
  despesas: Expense[];
  constructor(public expensesService: ExpensesService, private router: Router) {
    this.despesas = [];
  }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): Expense[] {
    this.despesas = this.expensesService.getAll();
    return this.despesas;
  }

  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }
}
