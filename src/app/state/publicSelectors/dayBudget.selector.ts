import {createSelector} from "@ngrx/store";
import {selectBudgetType} from "../selectors/settings.selector";
import {BudgetType} from "../../models/settings.model";
import {BudgetInfo} from "../../models/overallInfo.model";
import {selectStaticDayBudget} from "../selectors/dayBudget.static.selector";

export const selectDayBudget = createSelector(
  selectBudgetType,
  selectStaticDayBudget,
  (budgetType: BudgetType, staticDB): BudgetInfo =>
    staticDB
)
