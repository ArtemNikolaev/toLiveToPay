import * as dayjs from 'dayjs';
import { createReducer, on } from '@ngrx/store';
import { Settings } from '../models/settings.model';
import { getSettings, updateAll, updateAmount, updateBeginDate, updateEndDate } from '../state/settings.actions';

export const initialState: Settings = {
  amount: 0,
  // @ts-ignore todo: fix type issue
  beginDate: dayjs().format('YYYY-MM-DD'),
  // @ts-ignore todo: fix type issue
  endDate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
};

interface SettingsReducer extends Settings {
  type: string
}

function fieldUpdater(state : Settings, props: Partial<SettingsReducer> ) : Settings{
  const result  = Object.assign({}, state, props);
  delete result.type;

  return result;
}

export const settingsReducer = createReducer(
  initialState,
  on(updateAmount, fieldUpdater),
  on(updateBeginDate, fieldUpdater),
  on(updateEndDate, fieldUpdater),
  on(updateAll, fieldUpdater),
  on(getSettings, state => state),
);
