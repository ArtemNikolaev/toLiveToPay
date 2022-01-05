import { createAction, props } from '@ngrx/store';
import { Settings } from '../../models/settings.model';

export interface SettingsPayload {
  payload: Settings,
}

export const update = createAction(
  '[Settings] update',
  props<SettingsPayload>(),
)
