import { readable, writable } from 'svelte/store';
import dbConnection from '../models/indexedDBInit';

let db;
let set;

/* Dummy Data */
	let id = 0;
	const categories = [];
	categories[id] = {id, name: 'lunch'};
	categories[++id] = {id, name: 'shop'};
	categories[++id] = {id, name: 'uber'};

	function categoriesMapper () {
		const storeCategories = categories.map(
			category => Object.assign({}, category, {edit: false}),
		);

		return storeCategories;
	}

/* /Dummy Data */

export const categoriesStore = readable(categoriesMapper(), setFunc => set = setFunc);

const unsubscribe = dbConnection.subscribe((connection) => {
	if (!connection) return;

	db = connection;

	unsubscribe();
})

export function addCategory (name) {
	console.log('addCategory: ', { name });

	// TODO: name validation
	// TODO: saving to DB
}

export function deleteCategory (id) {
	console.log('deleteCategory:', { id });

	// TODO: removing from DB
}

export function updateCategory(id, name) {
	console.log('updateCategory: ', { id, name });

	// TODO: update in DB

	set(categoriesMapper());
}
