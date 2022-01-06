import {createSelector} from "@ngrx/store";
import {selectSettings} from "./settings.selector";
import {Settings} from "../../models/settings.model";

export const selectOverallMoney = createSelector(
  selectSettings,
  ({amount}: Settings) => amount,
)
