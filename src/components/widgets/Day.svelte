<script>
	import TextNumber from '../blocks/TextNumber.svelte';
	import Button from '../elements/Button.svelte';
	import { modalsNames, openModal } from '../../models/modalManager';

	export let remained = 40;
	export let total = 60;
	export let txt = 'Day budget';

	$: num = `${remained} / ${total}`;

	function addSpend() {
		openModal(modalsNames.addSpend);
	}
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
	<Button txt="Spend" func={addSpend}/>
	<TextNumber {txt} {num} />
	<Button txt="Save" />
</section>