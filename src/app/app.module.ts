import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverallLeftComponent } from './overall-left/overall-left.component';
import { DayBudgetComponent } from './day-budget/day-budget.component';
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
import { DaysLeftComponent } from './overall-left/days-left/days-left.component';
import { MoneyLeftComponent } from './overall-left/money-left/money-left.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    OverallLeftComponent,
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
    DaysLeftComponent,
    MoneyLeftComponent,
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
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production,
      autoPause: true,
      name: `toLiveToPay [${environment.production ? 'Production' : 'Dev'}]: ${environment.version}`
    })
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_DI_CONFIG,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
