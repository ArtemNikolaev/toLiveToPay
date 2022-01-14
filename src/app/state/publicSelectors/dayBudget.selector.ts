import {createSelector} from "@ngrx/store";
import {selectBudgetType} from "../selectors/settings.selector";
import {BudgetType} from "../../models/settings.model";
import {BudgetInfo} from "../../models/overallInfo.model";
import {selectStaticDayBudget} from "../selectors/dayBudget.static.selector";
import {selectDynamicDayBudget} from "../selectors/dayBudget.dynamic.selector";

export const selectDayBudget = createSelector(
  selectBudgetType,
  selectStaticDayBudget,
  selectDynamicDayBudget,
  (
    budgetType: BudgetType,
    staticDB: BudgetInfo,
    dynamicDB: BudgetInfo
  ): BudgetInfo =>
    budgetType === BudgetType.Dynamic ?
      dynamicDB : staticDB
)
