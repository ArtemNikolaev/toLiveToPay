import App from './components/App.svelte';
import { exist } from './models/token';
import { init } from './utils/trirdparty';
// TODO: withdraw can't be more than all savings value
// TODO: savings can't be more than all available money
// TODO: if dates invalid show settings modal
init();

const app = new App({
	target: document.body,
	props: {
		token: exist()
	}
});

export default app;