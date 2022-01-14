import {createSelector} from '@ngrx/store';
import {Spends} from '../../models/spends.model';
import {PredefinedCategories} from "../../models/categories.model";
import {selectOverallSpends} from "./spends.selector";

export const selectSavingsCount = createSelector(
  selectOverallSpends,
  (spends: Spends): number => {
      return spends
        .filter(el =>
          el.category === PredefinedCategories.Withdraw||
          el.category === PredefinedCategories.Deposit
        )
        .reduce((sum, el) => sum + el.sum, 0)
  }
)
