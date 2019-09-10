<script>
	export let id='modal';
</script>

<style>
	.background {
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
</style>

<section class='background' {id}>
	<slot>Empty Modal id:{id}</slot>
</section>