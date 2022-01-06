import { createSelector } from '@ngrx/store';
import { selectSettings } from './main';
import { Settings } from '../../models/settings.model';
import { DaysLeft } from '../../models/overallLeft.model';
import * as dayjs from 'dayjs';

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
