import { Categories } from '../../models/categories.model';
import { Spends } from '../../models/spends.model';

export const selectCategories = (state: any): Categories => state.categories;
export const selectSpends = (state: any): Spends => state.spends;
