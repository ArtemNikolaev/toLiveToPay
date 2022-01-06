import {Settings} from "../models/settings.model";
import { createSelector } from '@ngrx/store';
import * as dayjs from 'dayjs';
import { DaysLeft } from '../models/overallLeft.model';
import { Categories } from '../models/categories.model';
import { Spends } from '../models/spends.model';
import { APP_DI_CONFIG } from '../app-config/app=config.constants';

export const selectSettings = (state: any): Settings => state.settings;
export const selectCategories = (state: any): Categories => state.categories;
export const selectSpends = (state: any): Spends => state.spends;

export const selectDays = createSelector(
  selectSettings,
  (settings: Settings): DaysLeft => {
    const today = dayjs().startOf('day');
    const endDate = dayjs(settings.endDate).startOf('day').add(1, 'day');
    const beginDate = dayjs(settings.beginDate).startOf('day');

    return {
        overall: endDate.diff(beginDate) / 1000 / 60 / 60 / 24,
        left: endDate.diff(today) / 1000 / 60 / 60 / 24,
    };
  }
)

export const selectSavingsCount = createSelector(
  selectSpends,
  (spends: Spends): number => {
      return spends
        .filter(el =>
          el.category === APP_DI_CONFIG.categories.withdraw ||
          el.category === APP_DI_CONFIG.categories.deposit
        )
        .reduce((sum, el) => sum + el.sum, 0)
  }

)
