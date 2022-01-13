export enum PredefinedCategories {
  Deposit = 'deposti',
  Withdraw = 'withdraw',
}
export type Category = PredefinedCategories | string;
export type Categories = Category[];
