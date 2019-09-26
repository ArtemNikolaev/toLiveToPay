import { localStorage } from '../utils/browserMocks';
import { readable } from 'svelte/store';
import { storeName } from '../../etc/config';
import { addSpend } from './spendsStore';

let setStore;

function get() {
	let savings = Number(localStorage.getItem(storeName.savings));

	if (Number.isNaN(savings)) {
		savings = 0;

		set(savings);
	}

	return savings;
}

const set = num => localStorage.setItem(storeName.savings, num);

export const add = sum => {
	const category = sum >=0 ? 'save' : 'withdraw';

	addSpend({sum, category});
	setStore(get() + sum);
}

export const savingsStore = readable(get(), store => setStore = store);

savingsStore.subscribe(savings => set(savings));
