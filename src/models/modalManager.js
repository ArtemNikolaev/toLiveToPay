export const modalsNames = {
	settings: 'settings'
}

export function openModal(modal) {
	location.hash = modal;
}

export function closeModal() {
	location.hash = '';
}