import {createSelector} from "@ngrx/store";
import {Money} from "../../models/settings.model";
import {MoneyInfo} from "../../models/overallInfo.model";
import { selectSpendsSum } from './spendsSum.selector';
import { selectOverallMoney } from './overallMoney.selector';

export const selectMoneyInfo = createSelector(
  selectOverallMoney,
  selectSpendsSum,
  (overall: Money, spendsSum: Money): MoneyInfo => {
    const left = Math.floor((overall - spendsSum) * 100) / 100;

    return {overall, left};
  }
)
