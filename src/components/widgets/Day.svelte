<script>
	import DayBudget from '../blocks/DayBudget.svelte';
	import Button from '../elements/Button.svelte';
	import { modalsNames, openModal } from '../../models/modalManager';

	function addSpend() {
		openModal(modalsNames.addSpend);
	}
	function save() {
		openModal(modalsNames.save);
	}
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
	<Button txt="Spend" func={addSpend}/>
	<DayBudget />
	<Button txt="Save" func={save}/>
</section>