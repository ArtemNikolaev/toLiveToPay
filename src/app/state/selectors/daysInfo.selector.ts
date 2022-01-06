import { createSelector } from '@ngrx/store';
import { DaysInfo } from '../../models/overallInfo.model';
import {selectOverallDays} from "./overallDays.selector";
import {selectDaysLeft} from "./daysLeft.selector";

export const selectDaysInfo = createSelector(
  selectOverallDays,
  selectDaysLeft,
  (overall: number, left: number): DaysInfo => ({overall, left}),
)
