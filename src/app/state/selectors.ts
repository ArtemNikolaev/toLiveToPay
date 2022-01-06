import { Money, Settings } from "../models/settings.model";
import { createSelector } from '@ngrx/store';
import * as dayjs from 'dayjs';
import { DaysLeft, MoneyLeft } from '../models/overallLeft.model';
import { Spends } from '../models/spends.model';
import { APP_DI_CONFIG } from '../app-config/app=config.constants';
import { selectSettings, selectSpends } from './selectors/main';

export const selectDaysLeft = createSelector(
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

export const selectMoneyLeft = createSelector(
  selectSettings,
  selectSpends,
  (settings: Settings, spends: Spends): MoneyLeft => {
    const todayUnix = dayjs(settings.beginDate, 'YYYY-MM-DD').unix();
    console.log({settings, spends, todayUnix})
    const overall: Money = settings.amount;
    const left: Money = overall - spends
      .filter(el => el.date >= todayUnix)
      .reduce((result, el) => result + el.sum, 0);

    return {overall, left};
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
