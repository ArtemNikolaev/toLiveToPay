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
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
