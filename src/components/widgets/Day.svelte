<script>
	import DayBudget from '../blocks/DayBudget.svelte';
	import Button from '../elements/Button.svelte';
	import { name, factory } from '../../models/modalManager';
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
	<Button txt="Spend" func={factory(name.addSpend)}/>
	<DayBudget />
	<Button txt="Save" func={factory(name.save)}/>
</section>