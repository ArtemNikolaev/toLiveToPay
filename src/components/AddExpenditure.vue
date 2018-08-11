<template>
  <article>
    <section id="summ">
      <label>Amount of expenditure</label>
      <input type="number" name="summ" v-model.number="summ" min=1>
      <article id="errors">
        <p v-if="summZero">Amount can't be 0</p>
      </article>
    </section>

    <section id="date">
      <label>Description</label>
      <input type="text" name="desc" v-model="desc">
    </section>

    <button v-on:click="add">Add</button>
  </article>
</template>

<script>
import storage from '../services/localstorageService'

export default {
  name: 'AddExpenditure',
  data () {
    return {
      summ: 0,
      desc: null,
      summZero: false
    }
  },
  methods: {
    add: function () {
      if (!this.validation()) return

      const addExpenditure = storage.addExpenditure(this.summ, this.desc)
      if (addExpenditure[0]) console.error(addExpenditure[0])
      else this.$router.push('/')
    },
    validation: function () {
      let valid = true

      if (this.summ === 0) {
        valid = false

        this.summZero = true
      }

      return valid
    }
  }
}
</script>

<style scoped>

</style>
