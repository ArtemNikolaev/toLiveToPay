import App from './components/App.svelte';
import { exist } from './models/token';

const app = new App({
	target: document.body,
	props: {
		token: exist()
	}
});

export default app;