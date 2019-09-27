<!-- TODO: compile with ModalSave -->
<script>
	import Modal		from '../blocks/Modal.svelte';
	import Button		from '../elements/Button.svelte';
	import Input		from '../elements/Input.svelte';
	import TextNumber	from '../blocks/TextNumber.svelte';
	import { name, close } from '../../models/modalManager';
    import state from '../../utils/store';
    import moment from 'moment';
	let data = state.getState();
	state.subscribe(() => data = state.getState());

	const header = 'Withdraw';
	let sumToWithdraw = 0;

	function withdraw() {
	    state.dispatch({
	        type: 'ADD_SPEND',
	        payload: {
                sum: -sumToWithdraw,
                description: '',
                category: 'withdraw',
                date: Number(moment().startOf('day').format('x')),
                time: moment() - moment().startOf('day'),
            },
	    });

		sumToWithdraw = 0;

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

<Modal id={name.withdraw} {header}>
	<section slot='body'>
		<TextNumber txt='Available Sum' num={data.savings}/>
		<!-- TODO: only num -->
		<Input
			type='number'
			label='Sum To Withdraw'
			bind:value={sumToWithdraw}
		/>
	</section>

	<footer slot='footer'>
		<Button txt='Withdraw' func={withdraw}/>
		<Button txt='Cancel' func={close}/>
	</footer>
</Modal>
