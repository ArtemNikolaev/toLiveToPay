<script>
	import Header from './custom/Header.svelte';

	export let txt = 'defauld';
	export let num = 0;
</script>

<style>
	article	{
		display: grid;
		justify-content: center;
		align-items: center;
	}

	div {
		font-size: 2em;
		text-align: center;
	}
</style>

<article>
	<Header {txt} />

	<div>{num}</div>
</article>