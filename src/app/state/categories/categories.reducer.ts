import { LocalStorageConnector } from '../../storage/localStorage.connector';
import { Categories } from '../../models/categories.model';
import { createReducer, on } from '@ngrx/store';
import { add, CategoryPayload } from './categories.actions';

const connector = new LocalStorageConnector<Categories>('categories');

const defaultData: Categories = [];

function generateInitialState(): Categories {
  return connector.get() || defaultData;
}

const initialState: Categories = generateInitialState();

function addReducer(state: Categories, {payload: category}: CategoryPayload) {
  const result = [...state];

  if (result.indexOf(category) === -1) {
    result.push(category);

    connector.set(result);
  }

  return result;
}

export const categoriesReducer = createReducer(
  initialState,
  on(add, addReducer)
);
