import moment from 'moment';
import { localStorage } from '../utils/browserMocks';
import { readable } from 'svelte/store';
import { settings as config} from '../../etc/storeConfig';
import { savingsStore, add } from './savingsStore';

let previousSpends = 0;
let todaySpends = 0;

let savings;
savingsStore.subscribe(val => savings = val);

let setData;
export const dataStore = readable(calculate(), set => setData = set);

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
	setData(calculate());
}

function calculate() {
	const format = 'YYYY-MM-DD';
	const day = 1000 * 60 * 60 * 24;
	const { sum, bDate, eDate } = getSettings();

	const money = sum - savings - previousSpends;
	const moneyLeft = money - todaySpends;
	const daysAll = (moment(eDate, format).add(1, 'day') - moment(bDate, format)) / day;
	const daysLeft = (moment(eDate, format).add(1, 'day') - moment().startOf('day')) / day;
	const dayBudget = Math.floor(money / daysLeft);
	const dayBudgetLeft = dayBudget - todaySpends;

	return {
		moneyAll: sum,
		moneyLeft,
		daysAll,
		daysLeft,
		dayBudget,
		dayBudgetLeft,
	}
}
