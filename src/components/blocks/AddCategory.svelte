<script>
	import Button from '../elements/Button.svelte';
	import Input from '../elements/Input.svelte';
	import { addCategory } from '../../stores/categoriesStore';

	let name = '';

	function add () {
		addCategory(name);

		name = '';
	}
</script>

<style>
	article {
		display: grid;
		grid-template-columns: 3fr 1fr;
		align-items: center;
		justify-items: center;
	}
</style>

<article>
	<Input type='text' bind:value={name}/>
	<Button txt='Add' func={add}/>
</article>