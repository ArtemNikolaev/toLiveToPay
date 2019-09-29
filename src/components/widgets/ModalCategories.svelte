
<script>
  import InputButton from '../blocks/InputButton.svelte';
  import Modal from '../blocks/Modal.svelte';
  import ScrollableList from '../blocks/ScrollableList.svelte';
  import store from '../../utils/store';
  import { close, name } from '../../models/modalManager';
  import { Category } from '../../models/categories';

  let newCategory = new Category();

  function add() {
      newCategory.add();

      newCategory = newCategory;
  }

  function mapCategories(name) {
      return { name, old: name, disabled: true};
  }
  let categories = store.getState().categories.map(mapCategories);
  store.subscribe(() => categories = store.getState().categories.map(mapCategories));

    function editCategory(category, index) {
        if (!category.name) {
            category.name = category.old;
            categories[index] = category;
            return;
        }

        category.disabled = !category.disabled;

        categories[index] = category;

        if (category.disabled) {
            store.dispatch({
                type: 'UPDATE_CATEGORY',
                payload: {
                    index,
                    value: category.name,
                }
            });
        }
    }
    function removeCategory(index) {
        store.dispatch({
            type: 'REMOVE_CATEGORY',
            payload: index,
        });
    }
</script>

<style>
  .categories {
    height: 30vh;
  }

  ul {
    /*list-style-type: none;*/
    padding: 0;
  }
  li {
        display: grid;
        grid-template-columns: 4fr 1fr ;
        align-items: center;
        justify-items: center;
    }
</style>

<Modal id={name.categories} header="Categories">
  <section slot='body'>
    <InputButton
        bind:inputValue={newCategory.name}
        btnTxt="Add"
        btnClick={add}
    />

    <article class='categories'>
      <ScrollableList>
        <ul slot='list'>
          {#each categories as category, index}
            <li>
              <InputButton
                  bind:inputValue={category.name}
                  disabled={category.disabled}
                  btnTxt="Edit"
                  btnClick={() => editCategory(category, index)}
              />

              <button on:click={() => removeCategory(index)}>DEL</button>
            </li>
          {/each}
        </ul>
      </ScrollableList>
    </article>
  </section>

  <footer slot='footer'>
    <button on:click={close}>Cancel</button>
  </footer>
</Modal>
