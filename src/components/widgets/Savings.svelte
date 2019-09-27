<script>
	import Header from '../elements/Header.svelte';
	import Button from '../elements/Button.svelte';
	import { name, factory } from '../../models/modalManager';
    import state from '../../utils/store';
	let data = state.getState();
	state.subscribe(() => data = state.getState());

	export let withdraw = 'Withdraw';
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
		<Header txt='SAVINGS' />
		<span>{data.savings}</span>
		<Button txt={withdraw} func={factory(name.withdraw)}/>
</section>
