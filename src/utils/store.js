import { createStore } from 'redux';
import { localStorage } from './browserMocks';
import { settings, spends } from './defaults';
import * as categories from './categoriesHelper';
import moment from 'moment';

function calculate (state) {
  // intermediate
  state.todayDate = moment().startOf('day').format('x');
  state.spendsToday = state.spends.filter(item =>
    // eslint-disable-next-line eqeqeq
    item.date == state.todayDate
  );
  state.spendsSumToday = state.spendsToday.reduce((prev, cur) => { prev += cur.sum }, 0);
  state.spendsSumBeforeToday = state.spendsToday.filter(item => {
    return item.date >= moment(state.settings.bDate, 'YYYY-MM-DD').format('x') &&
      item.date < state.todayDate;
  }).reduce((prev, cur) => { prev += cur.sum }, 0);
  state.spendsAllSum = state.spendsSumBeforeToday + state.spendsSumToday;
  state.spendsSavings = state.spends
    .filter(item => item.category === 'deposit')
    .reduce((prev, cur) => prev + cur.sum, 0);
  state.spendsWithdraw = state.spends
    .filter(item => item.category === 'withdraw')
    .reduce((prev, cur) => prev + cur.sum, 0);

  // global
  state.moneyAll = Math.round(state.settings.sum * 100) / 100;
  state.moneyLeft = Math.round((state.moneyAll - state.spendsAllSum) * 100) / 100;
  state.daysAll = Math.round((
    moment(state.settings.eDate, 'YYYY-MM-DD').add(1, 'day') -
    moment(state.settings.bDate, 'YYYY-MM-DD')
  ) / (1000 * 60 * 60 * 24) * 100) / 100;
  state.daysLeft = Math.round((
    moment(state.settings.eDate, 'YYYY-MM-DD').add(1, 'day') -
    moment(state.todayDate, 'x')
  ) / (1000 * 60 * 60 * 24) * 100) / 100;
  state.dayBudget = Math.round((state.moneyAll - state.spendsSumBeforeToday) / state.daysLeft * 100) / 100;
  state.dayBudgetLeft = Math.round((state.dayBudget - state.spendsSumToday) * 100) / 100;
  state.savings = Math.round((state.spendsSavings + state.spendsWithdraw) * 100) / 100;

  return state;
}

function initialState () {
  const state = {
    settings: JSON.parse(localStorage.getItem('settings')) || settings,
    categories: categories.initial(),
    spends: JSON.parse(localStorage.getItem('spends')) || spends,
  };

  return JSON.parse(JSON.stringify(state));
}

function spendsAdd (state, spend) {
  state.spends = [
    spend,
    ...state.spends,
  ];

  return state;
}

function settingsReducer (state, settings) {
  return Object.assign({}, state, { settings });
}

function reducer (state, action) {
  state = Object.assign({}, state);

  switch (action.type) {
    case 'SAVE_SETTINGS':
      return calculate(settingsReducer(state, action.payload));

    case 'ADD_CATEGORY':
      return calculate(categories.add(state, action.payload));
    case 'UPDATE_CATEGORY':
      return calculate(categories.update(state, action.payload));
    case 'REMOVE_CATEGORY':
      return calculate(categories.remove(state, action.payload));

    case 'ADD_SPEND':
      return calculate(spendsAdd(state, action.payload));
    case 'UPDATE_SPEND':
    case 'REMOVE_SPEND':
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer, calculate(initialState()));

// TODO: remove after all checks
store.subscribe(() => {
  const state = store.getState();

  console.log('subscribe: ', state);

  localStorage.setItem('settings', JSON.stringify(state.settings));

  categories.save(state.categories);

  localStorage.setItem('spends', JSON.stringify(state.spends));
});

export default store;
