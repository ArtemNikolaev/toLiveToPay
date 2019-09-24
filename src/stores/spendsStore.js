import moment from 'moment';
import { readable } from 'svelte/store';
import { storeName } from '../../etc/config';

let setStore;
let setTodayStore;

function set(data) {
	localStorage.setItem(storeName.spends, JSON.stringify(data));

	if (setStore) setStore(data);
	if (setTodayStore) setTodayStore(getToday());
}

function get() {
	let data = JSON.parse(localStorage.getItem(storeName.spends));

	if (!Array.isArray(data)) {
		data = [];

		set(data);
	}

	return data;
}

function getToday() {
	return get().filter( item => item.date === moment().startOf('day').format('x'));
}

export const spendsStore = readable(get(), setFunc => setStore = setFunc);
export const todayStore = readable(getToday(), setFunc => setTodayStore = setFunc);

export function addSpend(obj) {
	if (!obj.sum) return;

	obj.date = moment().startOf('day').format('x');
	obj.time = moment() - moment().startOf('day');

	const spends = get();
	spends.unshift(obj);

	set(spends);
}
