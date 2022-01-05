import {Settings} from "../models/settings.model";
import { Categories } from '../models/categories.model';
import { Spends } from '../models/spends.model';

export interface State {
  settings: Settings,
  categories: Categories,
  spends: Spends,
}
