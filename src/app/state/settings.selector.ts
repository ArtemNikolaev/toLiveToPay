import { createFeatureSelector } from '@ngrx/store';
import { Settings } from '../models/settings.model';

export const selectSettings = createFeatureSelector<Settings>('settings')
