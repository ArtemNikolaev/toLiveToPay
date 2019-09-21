<script>
	import Button from '../elements/Button.svelte';
	import { addCategory } from '../../stores/categoriesStore';

	let name = '';

	function add () {
		addCategory(name);

		name = '';
	}

	function keyup(event) {
		console.log('keyup:', event.keyCode);
		const enter = 13;

		if (event.keyCode === enter) add();
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
	<input
		type='text'
		bind:value={name}

		on:keyup|preventDefault|stopPropagation={keyup}
	/>
	<Button txt='Add' func={add}/>
</article>