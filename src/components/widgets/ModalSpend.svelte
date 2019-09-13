<script>
	import Modal	from '../blocks/Modal.svelte';
	import Button 	from '../elements/Button.svelte';
	import Input 	from '../elements/Input.svelte';
	import {
		closeModal,
		modalsNames
	}				from '../../models/modalManager';


	const id = modalsNames.addSpend;
	const header = 'Add Spend';

	// TODO: temp, should go from server
	const selectArr = [
		'phone',
		'lunch',
		'beer',
		'pizza'
	];

	let amountOfMoney = 0;
	let description = '';
	let category = '';

	function add() {
		console.log(JSON.stringify(
			{amountOfMoney, description, category},
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

		{#if selectArr.length}
			<Input
				type='select'
				label='Category'
				{selectArr}
				bind:value={category}
			/>
		{/if}

		<Input
			type='text'
			label='Description'
			bind:value={description}
		/>
	</section>

	<footer slot='footer'>
		<Button txt='Add' func={add}/>
		<Button txt='Cancel' func={closeModal}/>
	</footer>
</Modal>