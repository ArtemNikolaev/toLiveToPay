import moment from 'moment';
import { open, name } from '../models/modalManager';
import { localStorage } from './browserMocks';

function showSettings () {
  open(name.settings)
}

export default () => {
  const settings = JSON.parse(localStorage.getItem('settings'));
  if (!settings) return showSettings();

  const { eDate, sum } = settings;

  if (!sum) return showSettings();

  if (moment().startOf('day') - moment(eDate, 'YYYY-MM-DD') >= 0) return showSettings();
};
