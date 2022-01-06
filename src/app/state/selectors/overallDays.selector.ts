import {createSelector} from "@ngrx/store";
import {selectSettings} from "./settings.selector";
import {Settings} from "../../models/settings.model";
import * as dayjs from "dayjs";

export const selectOverallDays = createSelector(
  selectSettings,
  (settings: Settings): number => {
    const beginDate = dayjs(settings.beginDate).startOf('day');
    const endDate = dayjs(settings.endDate)
      .startOf('day')
      .add(1, 'day');

    return endDate.diff(beginDate) / 1000 / 60 / 60 / 24;
  },
)
