import {BudgetType} from "../models/settings.model";

interface PredefinedCategories {
  deposit: string;
  withdraw: string;
}

export interface AppConfig {

  categories: PredefinedCategories
  budgetTypes: BudgetType[],
}
