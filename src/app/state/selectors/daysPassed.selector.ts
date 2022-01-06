import {createSelector} from "@ngrx/store";
import {selectOverallDays} from "./overallDays.selector";
import {selectDaysLeft} from "./daysLeft.selector";

export const selectDaysPassed = createSelector(
  selectOverallDays,
  selectDaysLeft,
  (overall: number, left: number): number => {
    return overall - left;
  }
)
