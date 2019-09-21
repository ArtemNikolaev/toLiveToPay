<script>
	import Header from '../elements/Header.svelte';
	import Button from '../elements/Button.svelte';
	import { savingsStore as sum } from '../../stores/savingsStore';
	import { modalsNames, openModalFactory } from '../../models/modalManager';

	export let savings = 'Savings';
	export let withdraw = 'Withdraw';

	$: header = savings.toUpperCase();
</script>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		justify-items: center;
		margin: 0;
		height: 100%;
	}
	span {
		font-size: 2em;
	}
</style>

<section class="widget">
		<Header txt={header} />
		<span>{$sum}</span>
		<Button txt={withdraw} func={openModalFactory(modalsNames.withdraw)}/>
</section>