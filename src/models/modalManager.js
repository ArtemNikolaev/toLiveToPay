export const modalsNames = {
	settings: 'settings',
	addSpend: 'add-spend',
	save: 'save',
}

export function openModal(modal) {
	location.hash = modal;
}

export function closeModal() {
	location.hash = '';
}