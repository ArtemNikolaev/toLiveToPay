<script>
	import AddCategory from '../blocks/AddCategory.svelte';
	import {
		categoriesStore,
		addCategoryToStore,
		removeCategoryFromStore,
	} from '../../stores/categoriesStore';
	import Modal from '../blocks/Modal.svelte';
	import Button from '../elements/Button.svelte';
	import Input from '../elements/Input.svelte';
	import ScrollableList from '../blocks/ScrollableList.svelte';
	import {
		closeModal,
		modalsNames
	}			from '../../models/modalManager';

	export let categories = [];

	function removeCategory(cat) {
		categories.splice(categories.indexOf(cat), 1);

		categories = [...categories];
	}
</script>

<style>
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
		<AddCategory />

		<article class='categories'>
			<ScrollableList>
				<ul slot='list'>
					{#each $categoriesStore as $category}
						<li>
							{#if !$category.edit}
								<span>{JSON.stringify($category)}</span>
							{:else}
								<Input type='text' bind:value={$category.name}/>
							{/if}

							<Button txt='✎' func={() => $category.edit = !$category.edit}/>
							<Button
								txt='🗑'
								func={() => removeCategoryFromStore($category.id)}
							/>
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