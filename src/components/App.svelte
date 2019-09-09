<script>
	import Day 		from './widgets/Day.svelte';
	import Savings 	from './widgets/Savings.svelte';
	import Overall 	from './widgets/Overall.svelte';
	import Spends 	from './widgets/Spends.svelte';

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
