import {createSelector} from "@ngrx/store";
import {selectSpends} from "./spends.selector";
import {Spends} from "../../models/spends.model";
import {selectSettings} from "./settings.selector";
import {Settings} from "../../models/settings.model";
import * as dayjs from "dayjs";

export const selectInBudgetSpends = createSelector(
  selectSpends,
  selectSettings,
  (spends: Spends, settings:Settings): Spends => spends
    .filter(el =>
      el.date >= dayjs(settings.beginDate, 'YYYY-MM-DD').unix()
    )
)
