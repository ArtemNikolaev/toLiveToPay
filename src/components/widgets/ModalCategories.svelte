<script>
	import CategoryAdd from '../blocks/CategoryAdd.svelte';
	import CategoryUpdate from '../blocks/CategoryUpdate.svelte';
	import Modal from '../blocks/Modal.svelte';
	import Button from '../elements/Button.svelte';
	import ScrollableList from '../blocks/ScrollableList.svelte';
	import { categoriesStore } from '../../stores/categoriesStore';
	import { closeModal, modalsNames } from '../../models/modalManager';
</script>

<style>
	.categories {
		height: 30vh;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}
</style>

<Modal id={modalsNames.categories} header="Categories">
	<section slot='body'>
		<CategoryAdd />

		<article class='categories'>
			<ScrollableList>
				<ul slot='list'>
					{#each $categoriesStore as category}
						<CategoryUpdate bind:category={category} />
					{/each}
				</ul>
			</ScrollableList>
		</article>
	</section>

	<footer slot='footer'>
		<Button txt='Cancel' func={closeModal}/>
	</footer>
</Modal>