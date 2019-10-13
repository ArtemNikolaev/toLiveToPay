<script>
  import Modal	from '../blocks/Modal.svelte';
  import Button 	from '../elements/Button.svelte';
  import Input 	from '../elements/Input.svelte';
  import { close, name } from '../../models/modalManager';
  import store from '../../utils/store';
  import moment from 'moment';

  let categories = store.getState().categories;
  store.subscribe(() => categories = store.getState().categories);

  let sum = 0;
  let description = '';
  let category = '';
  const today = moment().format('YYYY-MM-DD');
  let date = today;

  function add() {
    store.dispatch({
      type: 'ADD_SPEND',
      payload: {
        sum,
        description,
        category,
        date: Number(moment(date, 'YYYY-MM-DD').format('x')),
        time: moment() - moment().startOf('day'),
      },
    });

    sum = 0;
    description = '';
    category = '';
    date = today;

    close();
  }
</script>

<style>
  section {
    display: grid;

    align-items: center;
    justify-items: center;
  }
</style>

<Modal id={name.addSpend} header="Add Spend">
  <section slot='body'>
    <Input
      type='number'
      label='Amount of Money'
      bind:value={sum}
    />

    <Input
      type='date'
      label='Spend Date'
      max={today}
      bind:value={date}
    />

    {#if categories.length}
      <label>Category</label>
      <select bind:value={category}>
        <option value=''>No Category</option>

        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    {/if}

    <Input
      type='text'
      label='Description'
      bind:value={description}
    />
  </section>

  <footer slot='footer'>
    <Button txt='Add' func={add} />
    <Button txt='Cancel' func={close} />
  </footer>
</Modal>
