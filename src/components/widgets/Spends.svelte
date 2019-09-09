<script>
	import Header from '../elements/Header.svelte';

	export let spends = [];
</script>

<style>
	.widget {
		height: 100%;
		display: grid;
		grid-template-rows: 1fr 1fr 9fr;
		justify-items: center;
		overflow: hidden;
	}

	article {
		width: 100%;
	}

	p {
		display: grid;
		grid-template-columns: 2fr 2fr;
		justify-items: center;
		margin: 0;
	}

	article.list {
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
	}

</style>

<section class="widget">
	<Header txt="Spends" />
	<article>
		<p>
			<strong>Description</strong>
			<strong>Sum</strong>
		</p>
	</article>
	<article class="list">
		{#each spends as spend}
			<p>
				<span>{spend.desc}</span>
				<span>{spend.sum}</span>
			</p>
		{/each}
	</article>
</section>