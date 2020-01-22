import moment from 'moment';

export default function calculate (state) {
  // intermediate
  state.todayDate = moment().startOf('day').format('x');
  state.spendsToday = state.spends.filter(item =>
    // eslint-disable-next-line eqeqeq
    item.date == state.todayDate
  );
  state.spendsSumToday = state.spendsToday.reduce((prev, cur) => prev + cur.sum, 0);
  state.spendsSumBeforeToday = state.spends.filter(item => {
    return item.date >= moment(state.settings.bDate, 'YYYY-MM-DD').format('x') &&
      item.date < state.todayDate;
  }).reduce((prev, cur) => prev + cur.sum, 0);
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
