<!-- TODO: compile with ModalWithdraw -->
<script>
	import { add }		from '../../stores/savingsStore';
	import Modal		from '../blocks/Modal.svelte';
	import Money		from '../blocks/Money.svelte';
	import DayBudget	from '../blocks/DayBudget.svelte';
	import Button		from '../elements/Button.svelte';
	import Input		from '../elements/Input.svelte';
	import { name, close } from '../../models/modalManager';

	const header = 'Save Money';
	let sumToSave = 0;

	function save() {
		add(sumToSave);

		sumToSave = 0;

		close();
	}
</script>

<style>
	article {
		display: grid;
		grid-template-columns: 2fr 1fr;
		align-items: center;
		justify-items: center;

		width: 100%;
	}
</style>

<Modal id={name.save} {header}>
	<section slot='body'>
		<article>
			<DayBudget />
			<Money />
		</article>

		<!-- TODO: input with enter keyup -->
		<!-- TODO: only num values -->
		<Input
			type='number'
			label='Sum To Save'
			bind:value={sumToSave}
		/>
	</section>

	<footer slot='footer'>
		<Button txt='Save' func={save}/>
		<Button txt='Cancel' func={close}/>
	</footer>
</Modal>