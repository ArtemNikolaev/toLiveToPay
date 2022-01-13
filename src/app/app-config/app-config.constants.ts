import {InjectionToken} from "@angular/core";
import {AppConfig} from "./app-config.interface";
import {BudgetType} from "../models/settings.model";

export const APP_DI_CONFIG: AppConfig = {

  categories: {
    deposit: 'deposit',
    withdraw: 'withdraw',
  },
  budgetTypes: [
    BudgetType.Static,
    BudgetType.Dynamic,
  ]

};

export let APP_CONFIG = new InjectionToken< AppConfig >( 'app.config' );
