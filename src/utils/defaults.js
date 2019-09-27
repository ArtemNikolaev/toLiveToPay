import moment from 'moment';

export const settings = {
	bDate: moment().format('YYYY-MM-DD'),
	eDate: moment().add(1, 'day').format('YYYY-MM-DD'),
	sum: 0,
};
export const categories = [];
export const spends = [];
