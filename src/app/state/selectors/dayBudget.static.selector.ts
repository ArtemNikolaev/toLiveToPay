import {selectAllMoney} from "./settings.selector";
import {selectOverallDays} from "./overallDays.selector";
import {Money} from "../../models/settings.model";
import {createSelector} from "@ngrx/store";
import {selectDaysPassed} from "./daysPassed.selector";
import {selectOverallSpendsMoney, selectSavingsMoney} from "./spends.selector";
import {BudgetInfo} from "../../models/overallInfo.model";

const selectStaticDayBudgetOverall = createSelector(
  selectAllMoney,
  selectOverallDays,
  (money: Money, days: number): Money =>
    Math.floor(money * 100 / days) /100
)

const selectStaticDayBudgetToday = createSelector(
  selectStaticDayBudgetOverall,
  selectDaysPassed,
  selectOverallSpendsMoney,
  selectSavingsMoney,
  (
    dayBudget: Money,
    days: number,
    spends: Money,
    savings: Money
  ): Money =>
    Math.floor(
      (dayBudget * 100 * days) - spends * 100 - savings * 100
    ) / 100
)

export const selectStaticDayBudget = createSelector(
  selectStaticDayBudgetToday,
  selectStaticDayBudgetOverall,
  (left: Money, overall: Money): BudgetInfo => ({left, overall})
)
