<template>
  <article>
    <section v-if='loading'>
      loading...
    </section>

    <section>
      <h2>Осталось n дней<br/>по nnn денег</h2>

      <h1>bla</h1>
    </section>
  </article>
</template>

<script>
import storage from '../services/localstorageService'

export default {
  name: 'Home',
  data () {
    return storage.homeCalculation()
  }
}
</script>

<style>

</style>
