export enum PredefinedCategories {
  Deposit = 'deposit',
  Withdraw = 'withdraw',
}
export type Category = PredefinedCategories | string;
export type Categories = Category[];
