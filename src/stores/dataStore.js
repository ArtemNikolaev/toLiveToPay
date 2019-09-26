import moment from 'moment';
import { localStorage } from '../utils/browserMocks';
import { readable } from 'svelte/store';
import { storeName } from '../../etc/config';
import { settings as config } from '../../etc/storeConfig';
import { open, name } from '../models/modalManager';
import { todayStore, spendsStore } from './spendsStore';

let previousSpends = 0;
let todaySpends = 0;

spendsStore.subscribe(val => {
	const {bDate, eDate} = getSettings();

	const data = val.filter(item => {
		return moment(item.date, 'x') - moment(bDate, 'YYYY-MM-DD') > 0 &&
			moment(item.date, 'x') - moment(eDate, 'YYYY-MM-DD') < 0;
	});

	previousSpends = data.reduce(
	 	(val, acc) => val += acc.sum,
	 	0,
 	)
});

todayStore.subscribe(val =>
	todaySpends = val.reduce(
	 	(val, acc) => val += acc.sum,
	 	0,
 	)
);

let setData;
export const dataStore = readable(calculate(), set => setData = set);

export function getSettings() {
	const data = JSON.parse(localStorage.getItem(storeName.settings));

	if (
		!data ||
		moment(data.eDate, 'YYYY-MM-DD').add(1, 'day') - moment().startOf('day') < 0
	) {
		open(name.settings);
	}

	return data || {};
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

	localStorage.setItem(storeName.settings, JSON.stringify(obj));
	setData(calculate());
}

function calculate() {
	const format = 'YYYY-MM-DD';
	const day = 1000 * 60 * 60 * 24;
	const { sum, bDate, eDate } = getSettings();

	const money = sum - previousSpends;
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
