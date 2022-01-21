import { Spend } from '../../models/spends.model';
import { createAction, props } from '@ngrx/store';

export interface SpendPayload {
  payload: Spend;
}

export const add = createAction(
  '[Spends] add',
  props<SpendPayload>(),
)

export const rm = createAction(
  '[Spends] remove',
  props<SpendPayload>(),
)
