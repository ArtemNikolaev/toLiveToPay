<script>
	import Header from '../elements/Header.svelte';
	import Button from '../elements/Button.svelte';
	import { modalsNames, openModalFactory } from '../../models/modalManager';

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

	article.header {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		align-items: center;
		padding: 0.4em 0;
	}

	article.list {
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
	}
</style>

<section class="widget">
	<article class='header'>
		<span></span>
		<Header txt="Spends" />
		<Button txt='Categories' func={openModalFactory(modalsNames.categories)}/>
	</article>
	<article>
		<p>
			<strong>Sum</strong>
			<strong>Description</strong>
		</p>
	</article>
	<article class="list">
		{#each spends as spend}
			<p>
				<span>{spend.sum}</span>
				<span>{spend.desc}</span>
			</p>
		{/each}
	</article>
</section>