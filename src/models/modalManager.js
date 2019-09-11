export const modalsNames = {
	settings: 'settings',
	addSpend: 'add-spend',
}

export function openModal(modal) {
	location.hash = modal;
}

export function closeModal() {
	location.hash = '';
}