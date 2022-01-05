import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { settingsReducer } from './settings.reducer';
import { Settings } from '../models/settings.model';

export interface State {
  settings: Settings,
}

export const reducers: ActionReducerMap<State> = {
  settings: settingsReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
