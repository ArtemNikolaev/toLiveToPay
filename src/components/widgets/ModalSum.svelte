<script>
	import Modal		from '../blocks/Modal.svelte';
	import TextNumber from '../blocks/TextNumber.svelte';
	import Button		from '../elements/Button.svelte';
	import { name, close } from '../../models/modalManager';
	import store from '../../utils/store';

	let {moneyAll, moneyLeft} = store.getState();
	store.subscribe(() => {
    const state = store.getState();
    moneyAll = state.moneyAll;
    moneyLeft = state.moneyLeft;
	});


	let add = 0;

	$: sum = (add) ? moneyAll + add : moneyAll;
	$: sumLeft = (add) ? moneyLeft + add : moneyLeft;

	function setSum () {
    if (sumLeft <= 0) return;

    store.dispatch({
      type: 'SET_SUM',
      payload: sumLeft,
    });

    add = 0;

    close();
	}
</script>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-items: center;

		width: 100%;
	}
</style>

<Modal id={name.setSum} header='Change Sum'>
	<section slot='body'>
	  <article>
	    <TextNumber txt="All" num={moneyAll} />
	    <TextNumber txt="Left" num={moneyLeft} />
    </article>
		<article>
		  <header>+/-</header>
		  <input type="number" bind:value={add}>
    </article>
    <article>
	    <TextNumber txt="All" num={sum} />
	    <TextNumber txt="Left" num={sumLeft} />
    </article>
	</section>

	<footer slot='footer'>
		<Button txt='Save' func={setSum}/>
		<Button txt='Cancel' func={close}/>
	</footer>
</Modal>
