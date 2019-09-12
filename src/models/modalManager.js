export const modalsNames = {
	settings: 'settings',
	addSpend: 'add-spend',
	save: 'save',
	withdraw: 'withdraw',
}

export function openModal(modal) {
	location.hash = modal;
}

export function closeModal() {
	location.hash = '';
}