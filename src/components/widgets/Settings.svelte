<script>
	import moment 	from 'moment';
	import Modal	from '../blocks/Modal.svelte';
	import Button 	from '../elements/Button.svelte';
	import Input 	from '../elements/Input.svelte';
	import { closeModal, modalsNames } from '../../models/modalManager';

	const id = modalsNames.settings;
	const header = 'Settings';
	const max = moment().format('YYYY-MM-DD');
	const min = moment().add(1, 'day').format('YYYY-MM-DD');

	let amountOfMoney = 0;
	let beginDate = max;
	let endDate;

	function start() {
		console.log(JSON.stringify(
			{amountOfMoney, beginDate, endDate},
			null,
			4
		));

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
		<Input
			type='number'
			label='Amount of Money'
			bind:value={amountOfMoney}
		/>
		<Input
			type='date'
			label='Begin Date'
			{max}
			bind:value={beginDate}
		/>
		<Input
			type='date'
			label='End Date'
			{min}
			bind:value={endDate}
		/>
	</section>

	<footer slot='footer'>
		<Button txt='Go' func={start}/>
		<Button txt='Cancel' func={closeModal}/>
	</footer>
</Modal>