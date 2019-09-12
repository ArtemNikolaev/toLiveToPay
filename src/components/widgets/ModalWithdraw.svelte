<script>
	import Modal from '../blocks/Modal.svelte';
	import Button from '../elements/Button.svelte';
	import Input from '../elements/Input.svelte';
	import TextNumber from '../blocks/TextNumber.svelte';

	import { modalsNames, closeModal } from '../../models/modalManager';

	const header = 'Withdraw';
	let sumToWithdraw = 0;

	function withdraw() {
		console.log({ sumToWithdraw });

		closeModal();
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

<Modal id={modalsNames.withdraw} {header}>
	<section slot='body'>
		<TextNumber txt='Available Sum' num=60/>
		<Input
			type='number'
			label='Sum To Withdraw'
			bind:value={sumToWithdraw}
		/>
	</section>

	<footer slot='footer'>
		<Button txt='Withdraw' func={withdraw}/>
		<Button txt='Cancel' func={closeModal}/>
	</footer>
</Modal>