import {createSelector} from "@ngrx/store";
import {Money} from "../../models/settings.model";
import {MoneyInfo} from "../../models/overallInfo.model";
import { selectSpendsSum } from '../selectors/spendsSum.selector';
import { selectOverallMoney } from '../selectors/overallMoney.selector';
import {selectSavingsCount} from "../selectors/savingsCount.selector";

export const selectMoneyInfo = createSelector(
  selectOverallMoney,
  selectSpendsSum,
  selectSavingsCount,
  (overall: Money, spendsSum: Money, savings: Money): MoneyInfo => {
    const left = Math.floor((overall - spendsSum + savings) * 100) / 100;

    return {overall, left};
  }
)
