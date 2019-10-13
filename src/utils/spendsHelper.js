import { localStorage } from './browserMocks';
import { spends as initialValue } from './defaults';

const name = 'spends';

export function initial () {
  try {
    return JSON.parse(localStorage.getItem(name)) || initialValue;
  } catch (e) {
    return initialValue;
  }
}

export function add (state, spend) {
  state.spends = [
    spend,
    ...state.spends,
  ];

  return state;
}
