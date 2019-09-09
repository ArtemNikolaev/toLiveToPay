<script>
	import TextNumber from './TextNumber.svelte';
	import Header from './custom/Header.svelte';

	const txt = 'Overall Left'
</script>

<section class="widget">
	<Header {txt} />
	<article>
		<TextNumber text='Money' num=320/>
		<TextNumber text='Days'  num=22/>
	</article>
</section>