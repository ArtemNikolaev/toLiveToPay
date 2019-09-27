<script>
	import TextNumber from './TextNumber.svelte';
    import state from '../../utils/store';
	let data = state.getState();
	state.subscribe(() => data = state.getState());

	const txt = 'Money';

	$: num = `${data.moneyLeft} / ${data.moneyAll}`;
</script>

<TextNumber {txt} {num}/>
