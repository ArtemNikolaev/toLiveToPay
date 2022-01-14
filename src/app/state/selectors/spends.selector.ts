import {Spend, Spends} from '../../models/spends.model';
import {createSelector} from "@ngrx/store";
import * as dayjs from "dayjs";
import {PredefinedCategories} from "../../models/categories.model";
import {InputDate, Money} from "../../models/settings.model";
import {selectBeginDate} from "./settings.selector";

function filterSavings(spend: Spend): Boolean {
  return spend.category !== PredefinedCategories.Withdraw &&
    spend.category !== PredefinedCategories.Deposit
}
function filterSpends(spend: Spend): Boolean {
  return spend.category === PredefinedCategories.Withdraw ||
    spend.category === PredefinedCategories.Deposit
}

export const selectSpends = (state: any): Spends => state.spends;

export const selectTodaySpends = createSelector(
  selectSpends,
  (spends: Spends):Spends =>
    spends
      .filter(spend => spend.date === dayjs().startOf('day').unix())
      .filter(filterSavings)
)

export const selectOverallSpends = createSelector(
  selectSpends,
  selectBeginDate,
  (spends: Spends, beginDate: InputDate):Spends =>
    spends
      .filter(spend =>
        spend.date >= dayjs(beginDate, 'YYYY-MM-DD').startOf('day').unix()
      )
      .filter(filterSavings)
)

export const selectOverallBeforeTodaySpends = createSelector(
  selectSpends,
  selectBeginDate,
  (spends: Spends, beginDate: InputDate):Spends =>
    spends
      .filter(spend =>
        spend.date >= dayjs(beginDate, 'YYYY-MM-DD').startOf('day').unix() &&
        spend.date < dayjs().startOf('day').unix()
      )
      .filter(filterSavings)
)

const selectSavings = createSelector(
  selectSpends,
  selectBeginDate,
  (spends: Spends, beginDate: InputDate):Spends =>
    spends
      .filter(spend =>
        spend.date >= dayjs(beginDate, 'YYYY-MM-DD').startOf('day').unix()
      )
      .filter(filterSpends)
)

function spendsSum(spends: Spends): Money {
  console.log({spends});
  return spends.reduce((sum, spend) => sum + spend.sum, 0)
}

export const selectTodaySpendsMoney = createSelector(
  selectTodaySpends,
  spendsSum
)

export const selectOverallSpendsMoney = createSelector(
  selectOverallSpends,
  spendsSum
)

export const selectOverallBeforeTodaySpendsMoney = createSelector(
  selectOverallBeforeTodaySpends,
  spendsSum
)

export const selectSavingsMoney = createSelector(
  selectSavings,
  spendsSum
)
