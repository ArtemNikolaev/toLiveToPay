import { LocalStorageConnector } from '../../storage/localStorage.connector';
import { Spends } from '../../models/spends.model';
import { add, SpendPayload } from './spends.actions';
import { createReducer, on } from '@ngrx/store';

const connector = new LocalStorageConnector<Spends>('spends');
const defaultData: Spends = [];
const initialState: Spends = connector.get() || defaultData;

function addReducer(state: Spends, {payload: spend}: SpendPayload): Spends {
  const result = [...state, spend];

  connector.set(result);

  return result;
}

export const spendsReducer = createReducer(
  initialState,
  on(add, addReducer),
);
