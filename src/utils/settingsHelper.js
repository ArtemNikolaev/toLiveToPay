import { localStorage } from './browserMocks';
import { settings as initialValue } from './defaults';

const name = 'settings';

export function initial () {
  try {
    return JSON.parse(localStorage.getItem(name)) || initialValue;
  } catch (e) {
    return initialValue;
  }
}

function save (settings) {
  localStorage.setItem(name, JSON.stringify(settings));
}

export function update (state, settings) {
  const result = Object.assign({}, state, { settings });

  save(result.settings);

  return result;
}

export function updateSum (state, sum) {
  state.settings = Object.assign({}, state.settings);
  state.settings.sum = sum;

  save(state.settings);

  return state;
}
