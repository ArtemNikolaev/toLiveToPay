import {createSelector} from "@ngrx/store";
import {selectInBudgetSpends} from "./inBudgetSpends.selector";
import {Spends, Spend} from "../../models/spends.model";
import {Money} from "../../models/settings.model";

export const selectSpendsSum = createSelector(
  selectInBudgetSpends,
  (spends: Spends): Money =>
    spends.reduce(
      (all: number, {sum}:Spend) => all+sum,
      0
    )
)
