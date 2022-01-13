import {createSelector} from '@ngrx/store';
import {Spends} from '../../models/spends.model';
import {selectInBudgetSpends} from "./inBudgetSpends.selector";
import {PredefinedCategories} from "../../models/categories.model";

export const selectSavingsCount = createSelector(
  selectInBudgetSpends,
  (spends: Spends): number => {
      return spends
        .filter(el =>
          el.category === PredefinedCategories.Withdraw||
          el.category === PredefinedCategories.Deposit
        )
        .reduce((sum, el) => sum + el.sum, 0)
  }
)
