import { Category } from '../../models/categories.model';
import { createAction, props } from '@ngrx/store';

export interface CategoryPayload {
  payload: Category
}

export const add = createAction(
  '[Categories] add',
  props<CategoryPayload>()
)
