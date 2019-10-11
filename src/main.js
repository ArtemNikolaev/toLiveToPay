import App from './components/App.svelte';
import validateBudget from './utils/validateBudget';
import { init } from './utils/trirdparty';

validateBudget();

// TODO: withdraw can't be more than all savings value
// TODO: savings can't be more than all available money
// TODO: if dates invalid show settings modal
init();

const app = new App({
  target: document.body,
});

export default app;
