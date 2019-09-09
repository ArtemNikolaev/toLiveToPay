<script>
	import TextNumber from '../blocks/TextNumber.svelte';
	import Header from '../elements/Header.svelte';
	import Button from '../elements/Button.svelte';

	const txt = 'Overall Left'
	const settings = 'Change';
</script>

<style>
	section {
		display: grid;
		justify-items: center;
	}
	article {
		display: grid;
		grid-template-columns: 2fr 1fr 2fr;;
		align-items: center;
		justify-items: center;

		width: 100%;
	}
</style>

<section class="widget">
	<Header {txt} />
	<article>
		<TextNumber txt='Money' num=320/>
		<Button txt='Change' />
		<TextNumber txt='Days'  num=22/>
	</article>
</section>