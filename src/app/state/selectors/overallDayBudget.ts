import {createSelector} from "@ngrx/store";
import {selectDaysInfo} from "./daysInfo.selector";
import {Money} from "../../models/settings.model";
import {DaysInfo} from "../../models/overallInfo.model";
import {selectOverallMoney} from "./overallMoney.selector";

export const selectOveralDayBudget = createSelector(
  selectOverallMoney,
  selectDaysInfo,
  (amount: Money, {overall}: DaysInfo): Money => {
      return Math.floor(amount / overall * 100) / 100;
  }
)
