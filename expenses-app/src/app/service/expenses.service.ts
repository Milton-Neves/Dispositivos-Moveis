import { Injectable } from '@angular/core';
import { Expense } from '../model/expenses';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  despesas: Expense[];

  constructor() {
    this.despesas = [];
  }

  checkDuplicity(expenses: Expense): boolean {
    if (this.despesas.find((element) => element === expenses)) {
      return true;
    }
    return false;
  }

  addExpense(expenses: Expense): boolean {
    if (expenses !== null && !this.checkDuplicity(expenses)) {
      this.despesas.push(expenses);
      return true;
    }
    return false;
  }

  getAll(): Expense[] {
    return this.despesas;
  }
}
