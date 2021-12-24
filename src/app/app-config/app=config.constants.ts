import { InjectionToken } from "@angular/core";
import { AppConfig } from "./app-config.interface";

export const APP_DI_CONFIG: AppConfig = {

  categories: {
    deposit: 'deposit',
    withdraw: 'withdraw',
  }

};

export let APP_CONFIG = new InjectionToken< AppConfig >( 'app.config' );
