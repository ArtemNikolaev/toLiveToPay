import {Money} from "./settings.model";

export interface OverallLeft<Type> {
  overall: Type;
  left: Type;
}

export type DaysInfo = OverallLeft<number>;
export type MoneyInfo = OverallLeft<Money>;
export type BudgetInfo = OverallLeft<Money>;
