<script>
	export let id='modal';
	export let header = 'Empty Model Header [id:{id}]'
</script>

<style>
	.modal-background {
		display: grid;

		align-items: center;
		justify-items: center;

		position: fixed;
		background-color: rgba(0, 0, 0, 0.50);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 999;
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s;
	}

	:target {
    	visibility: visible;
		opacity: 1;
	}

	.modal-content {
		display: grid;
		grid-template-rows: 1fr 4fr 1fr;

		align-items: center;
		justify-items: center;

		background: white;
		padding: 0 1.5em;
	}
</style>

<section class='modal-background' {id}>
	<article class="modal-content">
		<header>{header}</header>
		<slot name='body'><div>Empty Modal Body [id:{id}]</div></slot>
		<slot name='footer'><footer>Empty Modal Footer [id:{id}]</footer></slot>
	</article>
</section>
