<template>
  <article>
    <section>
      <h2>Осталось {{daysToSalary}} дней<br/>по {{moneyPerDay}} денег</h2>

      <h1>{{moneyForToday}} денег на сегодня</h1>

      <div><button v-on:click='add'>Add</button></div>

      <ul v-if="expenses.length">
        <li v-for="expenditure in expenses" :key="expenditure.datetime">
          {{expenditure.summ}} - {{expenditure.description}}
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import storage from '../services/localstorageService'

export default {
  name: 'Home',
  data () {
    const [err, data] = storage.homeCalculation()

    if (err) this.$router.push('/new')

    return data
  },
  methods: {
    add: function () {
      this.$router.push('/add')
    }
  }
}
</script>

<style>

</style>
