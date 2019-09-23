<script>
	import TextNumber from './TextNumber.svelte';
	import { dataStore } from '../../stores/dataStore';

	export let remained = 40;
	export let total = 60;
	export let txt = 'Day budget';

	$: num = `${$dataStore.dayBudgetLeft} / ${$dataStore.dayBudget}`;
</script>

<TextNumber {txt} {num} />