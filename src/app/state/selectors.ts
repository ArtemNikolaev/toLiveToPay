import {Settings} from "../models/settings.model";
import { createSelector } from '@ngrx/store';
import * as dayjs from 'dayjs';
import { Days } from '../models/overallLeft.model';
import { Categories } from '../models/categories.model';

export const selectSettings = (state: any): Settings => state.settings;
export const selectCategories = (state: any): Categories => state.categories;

export const selectDays = createSelector(
  selectSettings,
  (settings: Settings): Days => {
    const today = dayjs().startOf('day');
    const endDate = dayjs(settings.endDate).startOf('day').add(1, 'day');
    const beginDate = dayjs(settings.beginDate).startOf('day');

    return {
        overall: endDate.diff(beginDate) / 1000 / 60 / 60 / 24,
        left: endDate.diff(today) / 1000 / 60 / 60 / 24,
    };
  }
)
