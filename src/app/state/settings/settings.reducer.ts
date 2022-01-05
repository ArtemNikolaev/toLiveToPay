import * as dayjs from 'dayjs';
import {Action, createReducer, on} from '@ngrx/store';
import {InputDate, Settings} from '../../models/settings.model';
import { addToAmount, AmountPayload, SettingsPayload, update } from './settings.actions';
import {LocalStorageConnector} from "../../storage/localStorage.connector";

const connector = new LocalStorageConnector<Settings>('settings');

const defaultData: Settings = {
  amount: 0,
  beginDate: dayjs().format('YYYY-MM-DD') as InputDate,
  endDate: dayjs().add(1, 'day').format('YYYY-MM-DD') as InputDate,
};

function generateInitialState(): Settings {
  return connector.get() || defaultData;
}

const initialState: Settings = generateInitialState();

interface SettingsReducer extends  Action, SettingsPayload {}

function updateReducer(state: Settings, {payload: settings}: SettingsReducer): Settings {
  connector.set(settings)
  return settings;
}

function addToAmountReducer(state: Settings, {payload: amount}: AmountPayload): Settings {
  const result = {...state};
  result.amount += amount;

  connector.set(result);

  return result;
}

export const settingsReducer = createReducer(
  initialState,
  on(update, updateReducer),
  on(addToAmount, addToAmountReducer)
);
