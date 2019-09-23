import { localStorage } from '../utils/browserMocks';
import { writable } from 'svelte/store';
import { settings as config} from '../../etc/storeConfig';
import { savingsStore, add } from './savingsStore';

let savings;
savingsStore.subscribe(val => savings = val);

export function getSettings() {
	if (!config.mapper) {
		config.mapper = val => val;
	}

	return config.mapper(JSON.parse(localStorage.getItem(config.name))) || config.default;
}

export function setSettings(obj) {
	const old = getSettings();

	if (
		!obj.bDate ||
		!obj.eDate ||
		!obj.sum ||
		(
			obj.bDate === old.bDate &&
			obj.eDate === old.eDate &&
			obj.sum === old.sum
		)
	) return;

	add(-savings);
	localStorage.setItem(config.name, JSON.stringify(obj));
}
