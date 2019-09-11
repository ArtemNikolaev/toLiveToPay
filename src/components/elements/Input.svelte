<script>
	export let type = 'text';
	export let value = null;
	export let label;
	export let max = null;
	export let min = null;
</script>

<style>
	input {
		width: 100%;
	}
</style>

{#if label}
	<label>{label}</label>
{/if}

{#if type === 'number'}
	<input
		type='number'
		bind:value
	/>
{:else if type === 'date'}
	<input
		type='date'
		bind:value
		{max}
		{min}
	/>
{:else}
	<p>[Input] Unknown Type</p>
{/if}