import { createStore } from 'redux';
import { localStorage } from './browserMocks';
import { settings } from './defaults';
import * as categories from './categoriesHelper';
//
import { setSettings } from '../stores/dataStore';

function initialState() {
  const state = {
    settings: JSON.parse(localStorage.getItem('settings')) || settings,
    categories: categories.initial(),
  };

  return JSON.parse(JSON.stringify(state));
}

function settingsReducer (state, settings) {
  return Object.assign({}, state, { settings });
}

function reducer(state, action) {
  state = Object.assign({}, state);

  switch (action.type) {
    case 'SAVE_SETTINGS':
      return settingsReducer(state, action.payload);
    case 'ADD_CATEGORY':
      return categories.add(state, action.payload);
    case 'UPDATE_CATEGORY':
      return categories.update(state, action.payload);
    case 'REMOVE_CATEGORY':
      return categories.remove(state, action.payload);
    default:
      return state;
  }
}

const store = createStore(reducer, initialState());

// TODO: remove after all checks
store.subscribe(() => {
  const state = store.getState();

  console.log('subscribe: ', state);

  setSettings(state.settings);

  categories.save(state.categories);
});

export default store;
