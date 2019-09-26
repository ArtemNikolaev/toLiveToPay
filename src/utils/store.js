import { createStore } from 'redux';
import { localStorage } from './browserMocks';
import { settings } from './defaults';

//
import { setSettings } from '../stores/dataStore';

export const actions = {
	SET_SETTINGS: 'SET_SETTINGS',
}

function initialState() {
	const state = {
		settings: JSON.parse(localStorage.getItem('settings')) || settings,
	};

	return JSON.parse(JSON.stringify(state));
}

function settingsReducer (state, settings) {
	return Object.assign({}, state, { settings });
}

function reducer(state, action) {
	switch (action.type) {
		case actions.SET_SETTINGS:
			return settingsReducer(state, action.payload);
		default:
			return state;
	}
}

export let store = createStore(reducer, initialState());

// TODO: remove after all checks
store.subscribe(() => {
	const state = store.getState();

	console.log('subscribe: ', state);

	setSettings(state.settings);
});
