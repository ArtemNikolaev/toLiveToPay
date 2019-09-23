import { readable } from 'svelte/store';

export default readable(null, connectToDb);

function onupgradeneeded (event) {
  const db = event.target.result;

  // TODO: add stores creation info to config
  const spends = db.createObjectStore("spends");
  spends.createIndex("date", "date", { unique: false });
  spends.createIndex("time", "time", { unique: false });
}

function connectToDb(set) {
  const request = indexedDB.open('toLiveToPay', 1);

  request.onerror = console.error;
  request.onsuccess = event => set(event.target.result);
  request.onupgradeneeded = onupgradeneeded;

  return () => console.log('no more subscribers');
}

