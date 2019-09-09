<script>
	import TextNumber from './TextNumber.svelte';
	import Button from './custom/Button.svelte';

	export let remained = 40;
	export let total = 60;
	export let txt = 'Day budget';

	$: num = `${remained} / ${total}`;
</script>

<style>
	.widget {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		align-items: center;
		justify-items: center;
	}
</style>

<section class="widget">
	<Button txt="Spend" />
	<TextNumber {txt} {num} />
	<Button txt="Save" />
</section>