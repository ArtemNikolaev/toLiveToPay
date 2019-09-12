export const modalsNames = {
	settings: 'settings',
	addSpend: 'add-spend',
	save: 'save',
	withdraw: 'withdraw',
}

function openModal(modal) {
	location.hash = modal;
}

export function closeModal() {
	location.hash = '';
}

export function openModalFactory(modal) {
	return () => openModal(modal);
}
