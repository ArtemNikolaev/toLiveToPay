<script>
	export let txt = 'empty button'
	export let func;
</script>

<style>
	button {
		margin: 0;
	}
</style>

<button on:click={func}>{txt.toUpperCase()}</button>