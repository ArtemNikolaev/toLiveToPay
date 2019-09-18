import { readable } from 'svelte/store';
import { db as config } from '../../etc/config';

export default readable(null, connectToDb);

function onupgradeneeded (event) {
  const db = event.target.result;

  // TODO: add stores creation info to config
  const categoriesStore = db.createObjectStore(
    "categories",
    {
      keyPath: "id",
      autoIncrement: true,
    },
  );
}

function connectToDb(set) {
  const request = indexedDB.open(config.name, config.version);

  request.onerror = console.error;
  request.onsuccess = event => set(event.target.result);
  request.onupgradeneeded = onupgradeneeded;
}

