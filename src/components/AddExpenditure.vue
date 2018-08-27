<template>
  <section id="add-section" class="col">
    <article class="widget single">
      <section class="content single">
        <span></span>
        <article>
          <label>Сумма💰:</label>
          <input type="number" name="summ" v-model.number="summ" min=1 autofocus>
          <article id="errors">
            <p v-if="summZero">Amount can't be 0</p>
          </article>
        </article>

        <article>
          <label>Описание</label>
          <input type="text" name="desc" v-model="desc">
        </article>

        <article>
          <label>Дата:</label>
          <input type="date" name="date" v-model="date" v-bind:max="maxDate">
          <article id="errors">
            <p v-if="badDate">Date should be correct</p>
          </article>
        </article>
        <span></span>
        <article>
          <button v-on:click="add">Потратить</button>
          <button v-on:click="cancel">Отмена</button>
        </article>
        <span></span>
      </section>
    </article>
  </section>
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
    cancel: function () {
      this.$router.push('/')
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
  #add-section {
    height: 50vh;
    font-size: 3vh;
  }
</style>
