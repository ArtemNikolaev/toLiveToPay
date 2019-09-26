import { categories as initialValue } from './defaults';
import { localStorage } from "./browserMocks";

export function initial() {
  return JSON.parse(localStorage.getItem('categories')) || initialValue;
}

export function save(categories) {
  localStorage.setItem('categories', JSON.stringify(categories));
}

export function add (state, category) {
  if (state.categories.indexOf(category) !== -1) return state;

  state.categories = [
    category,
    ...state.categories,
  ];

  return state;
}

export function update(state, update) {
  state.categories = [
    ...state.categories.slice(0, update.index),
    update.value,
    ...state.categories.slice(update.index + 1),
  ];

  return state;
}

export function remove(state, index) {
  state.categories = [
    ...state.categories.slice(0, index),
    ...state.categories.slice(index + 1),
  ];

  return state;
}