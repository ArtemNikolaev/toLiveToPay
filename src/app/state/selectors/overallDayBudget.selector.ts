import {createSelector} from "@ngrx/store";
import {Money} from "../../models/settings.model";
import {selectOverallMoney} from "./overallMoney.selector";
import {selectOverallDays} from "./overallDays.selector";

export const selectOveralDayBudget = createSelector(
  selectOverallMoney,
  selectOverallDays,
  (amount: Money, overall: number): Money => {
      return Math.floor(amount / overall * 100) / 100;
  }
)
