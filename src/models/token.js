export function exist() {
	const token = localStorage.getItem('token');

	if (!token) return;

	document.cookie = `token=${encodeURIComponent(token)}`;
	return true;
}
