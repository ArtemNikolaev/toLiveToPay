import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { settingsReducer } from './settings/settings.reducer';
import {State} from "./state";
import { categoriesReducer } from './categories/categories.reducer';

export const reducers : ActionReducerMap<State> = {
  settings: settingsReducer,
  categories: categoriesReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
