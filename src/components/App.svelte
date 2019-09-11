<script>
	import Day 		from './widgets/Day.svelte';
	import Savings 	from './widgets/Savings.svelte';
	import Overall 	from './widgets/Overall.svelte';
	import Spends 	from './widgets/Spends.svelte';

	// Modals
	import Settings		from './widgets/Settings.svelte';
	import AddSpend 	from './widgets/AddSpend.svelte';

	export let token;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<Overall />
<Day />
<Savings />
<Spends />

<!-- Modals -->
<Settings />
<AddSpend />