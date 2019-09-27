<script>
	import Money from '../blocks/Money.svelte';
	import TextNumber from '../blocks/TextNumber.svelte';
	import Header from '../elements/Header.svelte';
	import Button from '../elements/Button.svelte';
	import { name, factory } from '../../models/modalManager';
    import state from '../../utils/store';
	let data = state.getState();
	state.subscribe(() => data = state.getState());

	const txt = 'Overall Left';

	$: num = `${data.daysLeft} / ${data.daysAll}`;
</script>

<style>
	section {
		display: grid;
		justify-items: center;
	}
	article {
		display: grid;
		grid-template-columns: 2fr 2fr;
		align-items: center;
		justify-items: center;

		width: 100%;
	}
	article.header {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		align-items: center;
		padding: 0.4em 0;
	}
</style>

<section class="widget">
	<article class='header'>
		<span></span>
		<Header {txt} />
		<Button txt={name.settings} func={factory(name.settings)} />
	</article>
	<article>
		<Money />
		<TextNumber txt='Days'  {num}/>
	</article>
</section>
