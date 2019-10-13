<script>
  export let type = 'text';
  export let value = null;

  export let label = '';

  // for date
  export let max = null;
  export let min = null;

  // for select
  export let selectArr = [];
</script>

{#if label}
  <label>{label}</label>
{/if}

{#if type === 'number'}
  <input
    type='number'
    bind:value
  />
{:else if type === 'date'}
  <input
    type='date'
    bind:value
    {max}
    {min}
  />
{:else if type === 'text'}
  <input
    type='text'
    bind:value
  />
{:else if type === 'select'}
  <select bind:value>
    <option value=''>No Category</option>

    {#each selectArr as item}
      <option value={item}>{item}</option>
    {/each}
  </select>
{:else}
  <p>[Input] Unknown Type</p>
{/if}
