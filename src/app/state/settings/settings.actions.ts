import { createAction, props } from '@ngrx/store';
import { Money, Settings } from '../../models/settings.model';

export interface SettingsPayload {
  payload: Settings,
}

export interface AmountPayload {
  payload: Money,
}

export const update = createAction(
  '[Settings] update',
  props<SettingsPayload>(),
)

export const addToAmount = createAction(
  '[Settings] addToAmount',
  props<AmountPayload>(),
)
