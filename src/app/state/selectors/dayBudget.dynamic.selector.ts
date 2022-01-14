import {selectAllMoney} from "./settings.selector";
import {Money} from "../../models/settings.model";
import {createSelector} from "@ngrx/store";
import {
  selectOverallBeforeTodaySpendsMoney,
  selectTodaySpendsMoney
} from "./spends.selector";
import {BudgetInfo} from "../../models/overallInfo.model";
import {selectDaysLeft} from "./daysLeft.selector";

const selectDynamicDayBudgetOverall = createSelector(
  selectAllMoney,
  selectOverallBeforeTodaySpendsMoney,
  selectDaysLeft,
  (allMoney: Money, allSpends: Money, days: number): Money =>
    Math.floor((allMoney * 100 - allSpends * 100) / (days + 1)) /100
)

const selectDynamicDayBudgetToday = createSelector(
  selectDynamicDayBudgetOverall,
  selectTodaySpendsMoney,
  (dayBudget: Money, todaySpends: Money ): Money =>
    Math.floor(dayBudget * 100 - todaySpends * 100) / 100
)

export const selectDynamicDayBudget = createSelector(
  selectDynamicDayBudgetToday,
  selectDynamicDayBudgetOverall,
  (left: Money, overall: Money): BudgetInfo => ({left, overall})
)
