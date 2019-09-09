<script>
	import TextNumber from './TextNumber.svelte';
	import Header from './custom/Header.svelte';

	const txt = 'Overall Left'
</script>

<style>
	section {
		display: grid;
		justify-items: center;
	}
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;

		width: 100%;
	}
</style>

<section class="widget">
	<Header {txt} />
	<article>
		<TextNumber txt='Money' num=320/>
		<TextNumber txt='Days'  num=22/>
	</article>
</section>