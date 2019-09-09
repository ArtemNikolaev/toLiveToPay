<script>
	import Day from './Day.component.svelte';
	import Savings from './Savings.component.svelte';
	import Overall from './Overall.svelte';

	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<Day />
<Savings />
<Overall />
