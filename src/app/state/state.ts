import {Settings} from "../models/settings.model";
import { Categories } from '../models/categories.model';

export interface State {
  settings: Settings,
  categories: Categories,
}
