import {InjectionToken} from "@angular/core";
import {AppConfig} from "./app-config.interface";

export const APP_DI_CONFIG: AppConfig = {

};

export let APP_CONFIG = new InjectionToken< AppConfig >( 'app.config' );
