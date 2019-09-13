<script>
	import Modal from '../blocks/Modal.svelte';
	import Button from '../elements/Button.svelte';
	import Input from '../elements/Input.svelte';
	import ScrollableList from '../blocks/ScrollableList.svelte';
	import {
		closeModal,
		modalsNames
	}			from '../../models/modalManager';

	let newCategory = '';

	export let categories = [];

	$: console.log({categories});

	function addCategory() {
		if (!newCategory) return;

		newCategory = newCategory.trim();

		const exist = categories.some(cat => cat.name === newCategory);
		if (exist) return;

		categories = [
			{
				name: newCategory,
				edit: false,
			},
			...categories,
		];

		newCategory = '';
	}

	function removeCategory(cat) {
		categories.splice(categories.indexOf(cat), 1);

		categories = [...categories];
	}
</script>

<style>
	.add {
		display: grid;
		grid-template-columns: 3fr 1fr;
		align-items: center;
		justify-items: center;
	}

	.categories {
		height: 30vh;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		align-items: center;
		justify-items: center;
	}
</style>

<Modal id={modalsNames.categories} header="Categories">
	<section slot='body'>
		<article class='add'>
			<Input type='text' bind:value={newCategory}/>

			<Button txt='Add' func={addCategory}/>
		</article>

		<article class='categories'>
			<ScrollableList>
				<ul slot='list'>
					{#each categories as category}
						<li>
							{#if !category.edit}
								<span>{category.name}</span>
							{:else}
								<Input type='text' bind:value={category.name}/>
							{/if}

							<Button txt='✎' func={() => category.edit = !category.edit}/>
							<Button txt='🗑' func={() => removeCategory(category)}/>
						</li>
					{/each}
				</ul>
			</ScrollableList>
		</article>
	</section>

	<footer slot='footer'>
		<Button txt='Cancel' func={closeModal}/>
	</footer>
</Modal>