import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToLiveToPayApp } from './to-live-to-pay-app.component';
import { OverallInfoComponent } from './components/overall-info/overall-info.component';
import { SavingsComponent } from './savings/savings.component';
import { SpendsComponent } from './spends/spends.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangeSumComponent } from './change-sum/change-sum.component';
import { AddSpendComponent } from './add-spend/add-spend.component';
import { SaveMoneyComponent } from './save-money/save-money.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {APP_CONFIG, APP_DI_CONFIG} from "./app-config/app=config.constants";
import { TodaySpendsComponent } from './today-spends/today-spends.component';
import {MatTableModule} from "@angular/material/table";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { InfoBadgeComponent } from './components/info-badge/info-badge.component';
import { DayBudgetComponent } from './components/day-budget/day-budget.component';

@NgModule({
  declarations: [
    ToLiveToPayApp,
    OverallInfoComponent,
    DayBudgetComponent,
    SavingsComponent,
    SpendsComponent,
    SettingsComponent,
    ChangeSumComponent,
    AddSpendComponent,
    SaveMoneyComponent,
    WithdrawComponent,
    CategoriesComponent,
    TodaySpendsComponent,
    AppToolbarComponent,
    InfoBadgeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production,
      autoPause: true,
      name: `${ environment.appName }: ${ environment.version }${ environment.production ? '' : ' [Dev]' }`
    }),
    MatToolbarModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_DI_CONFIG,
    },
  ],
  bootstrap: [ToLiveToPayApp]
})
export class AppModule { }
