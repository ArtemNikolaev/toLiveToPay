<script>
	import Money from '../blocks/Money.svelte';
	import TextNumber from '../blocks/TextNumber.svelte';
	import Header from '../elements/Header.svelte';
	import Button from '../elements/Button.svelte';
	import { modalsNames, openModalFactory } from '../../models/modalManager';

	const txt = 'Overall Left';
</script>

<style>
	section {
		display: grid;
		justify-items: center;
	}
	article {
		display: grid;
		grid-template-columns: 2fr 1fr 2fr;
		align-items: center;
		justify-items: center;

		width: 100%;
	}
</style>

<section class="widget">
	<Header {txt} />
	<article>
		<Money />
		<Button txt={modalsNames.settings} func={openModalFactory(modalsNames.settings)} />
		<TextNumber txt='Days'  num=22/>
	</article>
</section>