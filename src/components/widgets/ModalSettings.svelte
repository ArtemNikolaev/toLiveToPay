<script>
	import moment from 'moment';

	import Modal from '../blocks/Modal.svelte';
	import Input from '../elements/Input.svelte';
	import store from '../../utils/store';
	import { name, close } from '../../models/modalManager';
	import validateSettings from '../../utils/validateBudget';

	let settings = store.getState().settings;
	store.subscribe(() => settings = store.getState().settings);

	function start() {
		store.dispatch({
			type: 'SAVE_SETTINGS',
			payload: settings,
		});

		close();

		validateSettings();
	}

	const today = moment().format('YYYY-MM-DD');
	const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');

	function cancel() {
	   close();

	   validateSettings();
	}
</script>

<style>
	section {
		display: grid;

		align-items: center;
		justify-items: center;
	}

</style>

<Modal id={name.settings} header='Settings'>
	<section slot='body'>
		<!-- TODO: only numbers -->
		<Input
			type='number'
			label='Amount of Money'
			bind:value={settings.sum}
		/>
		<Input
			type='date'
			label='Begin Date'
			max={today}
			bind:value={settings.bDate}
		/>
		<Input
			type='date'
			label='End Date'
			min={tomorrow}
			bind:value={settings.eDate}
		/>
	</section>

	<footer slot='footer'>
	    <button on:click={start}>Go</button>
	    <button on:click={cancel}>Cancel</button>
	</footer>
</Modal>
