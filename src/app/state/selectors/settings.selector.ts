import {Money, Settings} from "../../models/settings.model";
import {createSelector} from "@ngrx/store";

export const selectSettings = (state: any): Settings => state.settings;

export const selectAllMoney = createSelector(
  selectSettings,
  ({amount}: Settings): Money => amount
)

export const selectBudgetType = createSelector(
  selectSettings,
  ({budgetType}: Settings) => budgetType
)

export const selectBeginDate = createSelector(
  selectSettings,
  ({beginDate}: Settings) => beginDate
)
