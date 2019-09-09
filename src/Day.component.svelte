<script>
	import TextNumber from './TextNumber.svelte';
	import Button from './custom/Button.svelte';

	export let remained = 40;
	export let total = 60;
	export let txt = 'Day budget';

	$: num = `${remained} / ${total}`;
</script>

<style>
	section {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}

	article {
		display: grid;
		align-items: center;
		justify-items: center;
	}
</style>

<section class="widget">
	<TextNumber {txt} {num} />
	<article>
		<Button txt="Spend" />
		<Button txt="Save" />
	</article>
</section>