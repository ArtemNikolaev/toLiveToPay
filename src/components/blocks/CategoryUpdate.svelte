<script>
	import Button from '../elements/Button.svelte';
	import { deleteCategory } from '../../stores/categoriesStore';

	export let category;
</script>

<style>
	li {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		align-items: center;
		justify-items: center;
	}
</style>

<li>
	<input type='text' bind:value={category}/>

	<Button
		txt='🗑'
		func={() => deleteCategory(category)}
	/>
</li>