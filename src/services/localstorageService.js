import of from './await-of';
import moment from 'moment';

class LocalstorageService {
	summ = 'summ';
	finishDate = 'finishDate';
	expenses = 'expenses';

	_getJSON(varName) {
		let value;
		const str = localStorage.getItem(varName);

		if (!str) return Promise.reject(new Error(`[LocalstorageService:_getSumm()] - \`${varName}\` is not defined`));

		try {
			value = JSON.parse(str);
		} catch (e) {
			return Promise.reject(e);
		}

		return Promise.resolve(value);
	}

	_setJSON(varName, value) {
		if (!value) return Promise.reject(new Error(`[LocalstorageService:_setJSON] - \`${varName}\` is not definad`));

		localStorage.setItem(varName, JSON.stringify(value));
		return Promise.resolve();
	}

	_getNumber(varName) {
		const value = localStorage.getItem(varName);

		if (isNaN(value)) return Promise.reject(new Error(`[LocalstorageService:_getSumm()] - \`${varName}\` is not defined or not a number`))
		else return Promise.resolve();
	}

	_setNumber(varName, value) {
		if (isNaN(value)) return Promise.reject(new Error(`[LocalstorageService:_setSumm()] - \`${varName}\` should be a number`))

		localStorage.setItem(varName, value);

		return Promise.resolve();
	}

	_removeItem(varName) {
		localStorage.removeItem(varName);

		return Promise.resolve();
	}

	async setBalance(summ, finishDate) {
		const setSumm = await of(this._setNumber(this.summ, summ));
		if (setSumm[1]) return Promise.reject(setSumm[1]);

		const setFinishDate = await of(this._setNumber(this.finishDate, finishDate));
		if (setFinishDate[1]) return Promise.reject(setFinishDate[1]);

		const setExpenses = await of(this._setJSON(this.expenses, []));
		if (setExpenses[1]) return Promise.reject(setExpenses[1]);

		return Promise.resolve();
	}

	async addExpenditure(summ, description) {
		const expenditure = {
			summ, description,
			date: moment().startOf('day').format('x'),
			time: moment() - moment().startOf('day')
		};
		const expenses = await of(this._getJSON(this.expenses));
		if (expenses[1]) return Promise.reject(expenses[1])

		expenses[0].push(expenditure);

	  this._setJSON(this.expenses, expenses[0]);

	  return Promise.resolve();
	}
}

export default new LocalstorageService();
