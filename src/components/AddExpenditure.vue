<template>
  <article>
    <section>
      <label>Amount of expenditure</label>
      <input type="number" name="summ" v-model.number="summ" min=1>
      <article id="errors">
        <p v-if="summZero">Amount can't be 0</p>
      </article>
    </section>

    <section>
      <label>Description</label>
      <input type="text" name="desc" v-model="desc">
    </section>

    <section>
      <label>Date of Expenditure</label>
      <input type="date" name="date" v-model="date" v-bind:max="maxDate">
      <article id="errors">
        <p v-if="badDate">Date should be correct</p>
      </article>
    </section>

    <button v-on:click="add">Add</button>
  </article>
</template>

<script>
import storage from '../services/localstorageService'
import moment from 'moment'

export default {
  name: 'AddExpenditure',
  data () {
    return {
      summ: 0,
      desc: null,
      date: moment().format('YYYY-MM-DD'),
      maxDate: moment().format('YYYY-MM-DD'),
      summZero: false,
      badDate: false
    }
  },
  methods: {
    add: function () {
      if (!this.validation()) return

      const date = moment(this.date, 'YYYY-MM-DD').format('x')
      const addExpenditure = storage.addExpenditure(this.summ, this.desc, date)

      if (addExpenditure[0]) console.error(addExpenditure[0])
      else this.$router.push('/')
    },
    validation: function () {
      let valid = true

      if (this.summ === 0) {
        valid = false

        this.summZero = true
      }

      if (!this.date || this.date === '') {
        valid = false

        this.badDate = true
      }

      return valid
    }
  }
}
</script>

<style scoped>

</style>
