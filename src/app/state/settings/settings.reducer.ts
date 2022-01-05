import * as dayjs from 'dayjs';
import {Action, createReducer, on} from '@ngrx/store';
import {InputDate, Settings} from '../../models/settings.model';
import { SettingsPayload, update} from './settings.actions';

export const initialState: Settings = {
  amount: 0,
  beginDate: dayjs().format('YYYY-MM-DD') as InputDate,
  endDate: dayjs().add(1, 'day').format('YYYY-MM-DD') as InputDate,
};

interface SettingsReducer extends  Action, SettingsPayload {}

function updateReducer(state: Settings, props: SettingsReducer) {
  return props.payload;
}

export const settingsReducer = createReducer(
  initialState,
  on(update, updateReducer)
);
