import { createStore } from 'redux';
import * as settings from './settingsHelper';
import * as categories from './categoriesHelper';
import * as spends from './spendsHelper';
import calculate from './calculate';

function initialState () {
  const state = {
    settings: settings.initial(),
    categories: categories.initial(),
    spends: spends.initial(),
  };

  return JSON.parse(JSON.stringify(state));
}

function reducer (state, action) {
  state = Object.assign({}, state);

  switch (action.type) {
    case 'SAVE_SETTINGS':
      return calculate(settings.update(state, action.payload));
    case 'SET_SUM':
      return calculate(settings.updateSum(state, action.payload));
    case 'ADD_CATEGORY':
      return calculate(categories.add(state, action.payload));
    case 'UPDATE_CATEGORY':
      return calculate(categories.update(state, action.payload));
    case 'REMOVE_CATEGORY':
      return calculate(categories.remove(state, action.payload));

    case 'ADD_SPEND':
      return calculate(spends.add(state, action.payload));
    case 'UPDATE_SPEND':
    case 'REMOVE_SPEND':
    default:
      return state;
  }
}

const store = createStore(reducer, calculate(initialState()));

export default store;
