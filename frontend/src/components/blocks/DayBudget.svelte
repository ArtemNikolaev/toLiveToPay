<script>
  import TextNumber from './TextNumber.svelte';
  import state from '../../utils/store';

  let data = state.getState();
  state.subscribe(() => data = state.getState());

  export let remained = 40;
  export let total = 60;
  export let txt = 'Day budget';

  $: num = `${data.dayBudgetLeft} / ${data.dayBudget}`;
</script>

<TextNumber {txt} {num} />
