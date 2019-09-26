<script>
	export let inputValue = '';
	export let btnTxt = '';
	export let btnClick = ()=>{};
	export let disabled = false;

	function keyup(event) {
		const enter = 13;

		if (event.keyCode === enter) btnClick();
	}
</script>

<style>
	article {
		display: grid;
		grid-template-columns: 3fr 1fr;
		align-items: center;
		justify-items: center;
	}

	input:disabled {
	    color: black;
        border: 0;
        border-radius: 0;
	}
</style>

<article>
	<input
		type='text'
		bind:value={inputValue}
        autocomplete="off"
        disabled={disabled}
		on:keyup|preventDefault|stopPropagation={keyup}
	/>
	<button
	    on:click={btnClick}
    >{btnTxt.toUpperCase()}</button>
</article>
