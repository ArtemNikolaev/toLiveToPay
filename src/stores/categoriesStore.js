import { writable } from 'svelte/store';
import config from '../../etc/config';
import { localStorage } from '../utils/browserMocks';

const storeName = config.storeName.categories;

function categoriesGet () {
	let result;

	try {
		result = JSON.parse(localStorage.getItem(storeName));
		if (!result) throw new Error();
	} catch (e) {
		result = [];

		localStorage.setItem(storeName, JSON.stringify(result));
	}

	return result;
};

function categoriesSet (arr) {
	const categories = JSON.stringify(arr.map(cat => cat.trim()))
	const oldCategories = JSON.stringify(categoriesGet());

	if (categories === oldCategories) return;

	localStorage.setItem(
		storeName,
		categories,
	);
}

function isExist(name) {
	const data = name.trim();

	return categoriesGet().indexOf(data) !== -1;
}

export const categoriesStore = writable(categoriesGet());

categoriesStore.subscribe(categoriesSet);

export function addCategory (name) {
	if (isExist(name)) return;

	const categories = categoriesGet();
	
	categories.unshift(name);

	categoriesStore.set(categories);
}

export function deleteCategory (name) {
	if (!isExist(name)) return;

	const categories = categoriesGet();

	categories.splice(categories.indexOf(name), 1);

	categoriesStore.set(categories);
}