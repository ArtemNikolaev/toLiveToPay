import * as dayjs from 'dayjs';
import {Action, createReducer, on} from '@ngrx/store';
import {InputDate, Settings} from '../../models/settings.model';
import { SettingsPayload, update} from './settings.actions';

const defaultData: Settings = {
  amount: 0,
  beginDate: dayjs().format('YYYY-MM-DD') as InputDate,
  endDate: dayjs().add(1, 'day').format('YYYY-MM-DD') as InputDate,
};

function generateInitialState(): Settings {
  try {
    return JSON.parse(localStorage.getItem('settings') || '') as Settings;
  } catch (e) {
    return defaultData;
  }
}

export const initialState: Settings = generateInitialState();

interface SettingsReducer extends  Action, SettingsPayload {}

function updateReducer(state: Settings, props: SettingsReducer) {

  return props.payload;
}

export const settingsReducer = createReducer(
  initialState,
  on(update, updateReducer)
);
