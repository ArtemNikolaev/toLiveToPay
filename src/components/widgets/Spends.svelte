<script>
	import Button from '../elements/Button.svelte';
	import { name, factory } from '../../models/modalManager';
	import store from '../../utils/store';

    let spends = store.getState().spendsToday;
	store.subscribe(() =>
	    spends = store.getState().spendsToday
    );

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
		grid-template-columns: 1fr 1fr 2fr;
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
		<header>Spends</header>
		<Button txt='Categories' func={factory(name.categories)}/>
	</article>
	<article>
		<p>
			<strong>Sum</strong>
			<strong>Category</strong>
			<strong>Description</strong>
		</p>
	</article>
	<article class="list">
		{#each spends as spend}
			<p>
				<span>{spend.sum}</span>
				<span>{spend.category}</span>
				<span>{spend.description}</span>
			</p>
		{/each}
	</article>
</section>
