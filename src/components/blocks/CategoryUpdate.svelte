<script>
	import Button from '../elements/Button.svelte';
	import Input from '../elements/Input.svelte';
	import {
		deleteCategory,
		updateCategory
	} from '../../stores/categoriesStore';

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
	{#if !category.edit}
		<span>{category.name}</span>
	{:else}
		<Input type='text' bind:value={category.name}/>
	{/if}

	{#if !category.edit}
		<Button txt='✏️' func={() => category.edit = !category.edit}/>
	{:else}
		<Button txt='💾' func={() => updateCategory(category.id, category.name)}/>
	{/if}

	<Button
		txt='🗑'
		func={() => deleteCategory(category.id)}
	/>
</li>