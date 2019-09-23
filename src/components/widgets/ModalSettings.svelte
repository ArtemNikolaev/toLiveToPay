<script>
import moment 	from 'moment';
import Modal	from '../blocks/Modal.svelte';
import Button 	from '../elements/Button.svelte';
import Input 	from '../elements/Input.svelte';
import {
	getSettings,
	setSettings
}				from '../../stores/dataStore';
import {
	closeModal,
	modalsNames
}				from '../../models/modalManager';

const id = modalsNames.settings;
const header = 'Settings';
const max = moment().format('YYYY-MM-DD');
const min = moment().add(1, 'day').format('YYYY-MM-DD');

const settings = getSettings();
settings.bDate = settings.bDate || max;
settings.eDate = settings.eDate || min;

let amountOfMoney = 0;
let beginDate = max;
let endDate;

function start() {
	setSettings(settings);

	closeModal();
}
</script>

<style>
	section {
		display: grid;

		align-items: center;
		justify-items: center;
	}

</style>

<Modal {id} {header}>
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
			{max}
			bind:value={settings.bDate}
		/>
		<Input
			type='date'
			label='End Date'
			{min}
			bind:value={settings.eDate}
		/>
	</section>

	<footer slot='footer'>
		<Button txt='Go' func={start}/>
		<Button txt='Cancel' func={closeModal}/>
	</footer>
</Modal>