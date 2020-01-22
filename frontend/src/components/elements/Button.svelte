<script>
  export let txt = 'empty button';
  export let func = null;
</script>

<button on:click={func}>{txt.toUpperCase()}</button>
