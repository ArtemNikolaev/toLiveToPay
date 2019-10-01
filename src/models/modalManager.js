export const name = {
  settings: 'settings',
  addSpend: 'add-spend',
  save: 'save',
  withdraw: 'withdraw',
  categories: 'categories',
};

export function open (modal) {
  location.hash = modal;
}

export function close () {
  location.hash = '';
}

export function factory (modal) {
  return () => open(modal);
}
