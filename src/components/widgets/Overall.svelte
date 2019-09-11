<script>
	import TextNumber from '../blocks/TextNumber.svelte';
	import Header from '../elements/Header.svelte';
	import Button from '../elements/Button.svelte';
	import { modalsNames, openModal } from '../../models/modalManager';

	const txt = 'Overall Left';

	function openSettings() {
		openModal(modalsNames.settings);
	}
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
		<TextNumber txt='Money' num=320/>
		<Button txt={modalsNames.settings} func={openSettings} />
		<TextNumber txt='Days'  num=22/>
	</article>
</section>