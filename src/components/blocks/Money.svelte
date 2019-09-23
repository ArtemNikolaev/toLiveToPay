<script>
	import TextNumber from './TextNumber.svelte';
	import { dataStore } from '../../stores/dataStore';

	const txt = 'Money';

	$: num = `${$dataStore.moneyLeft} / ${$dataStore.moneyAll}`;
</script>

<TextNumber {txt} {num}/>