import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { settingsReducer } from './settings/settings.reducer';
import {State} from "./state";

export const reducers : ActionReducerMap<State> = {
  settings: settingsReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
