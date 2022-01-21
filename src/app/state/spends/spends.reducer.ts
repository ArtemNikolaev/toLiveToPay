import { LocalStorageConnector } from '../../storage/localStorage.connector';
import {Spend, Spends} from '../../models/spends.model';
import {add, rm, SpendPayload} from './spends.actions';
import { createReducer, on } from '@ngrx/store';

const connector = new LocalStorageConnector<Spends>('spends');
const defaultData: Spends = [];
const initialState: Spends = connector.get() || defaultData;

function addReducer(state: Spends, {payload: spend}: SpendPayload): Spends {
  const result = [...state, spend];

  connector.set(result);

  return result;
}

function removeReducer(state: Spends, {payload}: SpendPayload): Spends {
  const result = state.filter((spend: Spend): boolean => {
    for (let property in spend) {
      if (property === 'time') {
        continue;
      }

      // @ts-ignore
      if  (payload[property] !== spend[property]) return true;

    }

    return false;
  });

  connector.set(result);

  return result;
}

export const spendsReducer = createReducer(
  initialState,
  on(add, addReducer),
  on(rm, removeReducer),
);
