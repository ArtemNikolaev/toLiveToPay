<script>
	import Modal	from '../blocks/Modal.svelte';
	import Button 	from '../elements/Button.svelte';
	import Input 	from '../elements/Input.svelte';
	import { close, name } from '../../models/modalManager';
	import {
		categoriesStore
	}				from '../../stores/categoriesStore';
	import { addSpend } from '../../stores/spendsStore';

	const header = 'Add Spend';

	let sum = 0;
	let description = '';
	let category = '';

	function add() {
		addSpend({sum, description, category});

		sum = 0;
		description = '';
		category = '';

		close();
	}
</script>

<style>
	section {
		display: grid;

		align-items: center;
		justify-items: center;
	}
</style>

<Modal id={name.addSpend} {header}>
	<section slot='body'>
		<Input
			type='number'
			label='Amount of Money'
			bind:value={sum}
		/>

		{#if $categoriesStore.length}
			<label>Category</label>
			<select bind:value={category}>
				<option value=''>No Category</option>

				{#each $categoriesStore as category}
					<option value={category}>{category}</option>			
				{/each}
			</select>
		{/if}

		<Input
			type='text'
			label='Description'
			bind:value={description}
		/>
	</section>

	<footer slot='footer'>
		<Button txt='Add' func={add}/>
		<Button txt='Cancel' func={close}/>
	</footer>
</Modal>