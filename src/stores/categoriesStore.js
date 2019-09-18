import dbConnection from '../models/indexedDBInit';

let db;

const unsubscribe = dbConnection.subscribe((connection) => {
	if (!connection) return;

	db = connection;

	unsubscribe();
})

export function addCategory (name) {
	// TODO: name validation
	// TODO: saving to DB

	console.log('addCategory: ', name);
}
