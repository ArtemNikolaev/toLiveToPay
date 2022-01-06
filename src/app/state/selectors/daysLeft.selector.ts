import {createSelector} from "@ngrx/store";
import {selectSettings} from "./settings.selector";
import {Settings} from "../../models/settings.model";
import * as dayjs from "dayjs";

export const selectDaysLeft = createSelector(
  selectSettings,
  ({endDate}:Settings): number => {
    const today = dayjs().startOf('day');
    const last = dayjs(endDate).startOf('day');

    return last.diff(today) / 1000 / 60 / 60 / 24;
  }
)
