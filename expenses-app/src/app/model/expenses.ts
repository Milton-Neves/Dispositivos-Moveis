import { ExpensesTypeEnum } from '../enum/expensesType.enum';

export class Expense {
  data!: string;
  motivo!: string;
  tipo!: ExpensesTypeEnum;
  valor!: number;
  desconto!: number;
}
