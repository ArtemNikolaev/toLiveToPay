import {createSelector} from "@ngrx/store";
import {selectSettings} from "./settings.selector";
import {selectSpends} from "./spends.selector";
import {Money, Settings} from "../../models/settings.model";
import {Spends} from "../../models/spends.model";
import {MoneyInfo} from "../../models/overallInfo.model";
import * as dayjs from "dayjs";

export const selectMoneyLeft = createSelector(
  selectSettings,
  selectSpends,
  (settings: Settings, spends: Spends): MoneyInfo => {
    const todayUnix = dayjs(settings.beginDate, 'YYYY-MM-DD').unix();
    console.log({settings, spends, todayUnix})
    const overall: Money = settings.amount;
    const left: Money = overall - spends
      .filter(el => el.date >= todayUnix)
      .reduce((result, el) => result + el.sum, 0);

    return {overall, left};
  }
)
