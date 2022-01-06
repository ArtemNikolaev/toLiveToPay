import {createSelector} from "@ngrx/store";
import {selectDayBudgetLeft} from "./dayBudgetLeft.selector";
import {selectOveralDayBudget} from "./overallDayBudget.selector";
import {Money} from "../../models/settings.model";
import {BudgetInfo} from "../../models/overallInfo.model";

export const selectBudgetInfo = createSelector(
  selectDayBudgetLeft,
  selectOveralDayBudget,
  (
    left: Money,
    overall: Money,
  ): BudgetInfo =>
    ({left, overall})
)
