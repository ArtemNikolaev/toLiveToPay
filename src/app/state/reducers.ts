import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { settingsReducer } from './settings/settings.reducer';
import {State} from "./state";
import { categoriesReducer } from './categories/categories.reducer';
import { spendsReducer } from './spends/spends.reducer';

export const reducers : ActionReducerMap<State> = {
  settings: settingsReducer,
  categories: categoriesReducer,
  spends: spendsReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
