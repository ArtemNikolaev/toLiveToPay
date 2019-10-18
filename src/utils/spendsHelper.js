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

  save(state.spends);

  return state;
}

function save (spends) {
  localStorage.setItem(name, JSON.stringify(spends));
}
