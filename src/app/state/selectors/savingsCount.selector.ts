import { createSelector } from '@ngrx/store';
import { Spends } from '../../models/spends.model';
import { APP_DI_CONFIG } from '../../app-config/app-config.constants';
import {selectInBudgetSpends} from "./inBudgetSpends.selector";

export const selectSavingsCount = createSelector(
  selectInBudgetSpends,
  (spends: Spends): number => {
      return spends
        .filter(el =>
          el.category === APP_DI_CONFIG.categories.withdraw ||
          el.category === APP_DI_CONFIG.categories.deposit
        )
        .reduce((sum, el) => sum + el.sum, 0)
  }
)
