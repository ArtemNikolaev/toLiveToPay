<script>
	import TextNumber from './TextNumber.svelte';

	export let remained = 40;
	export let total = 60;
	export let txt = 'Day budget';

	$: num = `${remained} / ${total}`;
</script>

<TextNumber {txt} {num} />