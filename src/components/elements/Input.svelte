<script>
	export let type = 'text';
	export let value;
	export let label;
	export let max;
	export let min;
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
		bind:value={value}
	/>
{:else if type === 'date'}
	<input
		type='date'
		bind:value={value}
		{max}
		{min}
	/>
{:else}
	<p>[Input] Unknown Type</p>
{/if}