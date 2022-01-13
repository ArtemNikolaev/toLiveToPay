import * as dayjs from 'dayjs';
import { Money } from './settings.model';
import {PredefinedCategories} from "./categories.model";

export class Spend {
  date: number;
  time: number;
  sum: Money;
  description?: string;
  category?: PredefinedCategories | string;

  constructor(obj: Partial<Spend>) {
    this.date = dayjs(obj.date, 'YYYY-MM-DD').startOf('day').unix();
    this.time = dayjs().unix() - dayjs().startOf('day').unix();
    this.sum = Number(obj.sum);
    this.description = obj.description;
    this.category = obj.category;
  }
}

export type Spends = Spend[];
