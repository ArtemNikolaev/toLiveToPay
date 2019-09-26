<script>
	import moment from 'moment';

	import Modal from '../blocks/Modal.svelte';
	import Button from '../elements/Button.svelte';
	import Input from '../elements/Input.svelte';
	import { store, actions } from '../../utils/store';
	import {
		closeModal,
		modalsNames
	} from '../../models/modalManager';


	let settings = store.getState().settings;
	store.subscribe(() => settings = store.getState().settings);

	function start() {
		store.dispatch({
			type: actions.SET_SETTINGS,
			payload: settings,
		});

		closeModal();
	}

	const today = moment().format('YYYY-MM-DD');
	const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');
</script>

<style>
	section {
		display: grid;

		align-items: center;
		justify-items: center;
	}

</style>

<Modal id={modalsNames.settings} header='Settings'>
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
		<Button txt='Go' func={start}/>
		<Button txt='Cancel' func={closeModal}/>
	</footer>
</Modal>