import { createAction, props } from '@ngrx/store';
import { InputDate, Money, Settings } from '../models/settings.model';

export const updateAmount = createAction(
  '[Settings amount] update',
  props<{amount: Money}>()
)

export const updateBeginDate = createAction(
  '[Settings beginDate] update',
  props<{beginDate: InputDate}>(),
)

export const updateEndDate = createAction(
  '[Settings endDate] update',
  props<{endDate: InputDate}>(),
)

export const updateAll = createAction(
  '[Settings] update',
  props<Settings>(),
)

export const getSettings = createAction(
  '[Settings] get',
)
