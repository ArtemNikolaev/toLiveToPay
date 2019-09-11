<script>
	import Day 		from './widgets/Day.svelte';
	import Savings 	from './widgets/Savings.svelte';
	import Overall 	from './widgets/Overall.svelte';
	import Spends 	from './widgets/Spends.svelte';
	import Settings	from './widgets/Settings.svelte';

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
