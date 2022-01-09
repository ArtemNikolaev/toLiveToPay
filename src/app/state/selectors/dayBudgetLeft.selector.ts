import {createSelector} from "@ngrx/store";
import {selectOveralDayBudget} from "./overallDayBudget.selector";
import {selectSpendsSum} from "./spendsSum.selector";
import {Money} from "../../models/settings.model";
import {selectDaysPassed} from "./daysPassed.selector";

export const selectDayBudgetLeft = createSelector(
  selectOveralDayBudget,
  selectDaysPassed,
  selectSpendsSum,
  (
    overallDayBudget: Money,
    daysPassed: number,
    allSpends: Money
  ): Money => {
    const dayBudgetLeft = overallDayBudget * daysPassed - allSpends;
    return Math.floor(dayBudgetLeft * 100) / 100;
  }
)
