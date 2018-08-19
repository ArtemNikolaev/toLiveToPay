<template>
  <section id="new-balance">
    <article class="widget single">
      <section class="content single">
        <span></span>

        <section id="summ">
          <label> Сколько денег:</label>
          <input type="number" name="summ" v-model.number="summ" min=1>
          <article id="errors">
            <p v-if="summZero">Amount can't be 0</p>
          </article>
        </section>

        <section id="date">
          <label>Нужно дожить до:</label>
          <input type="date" name="date" v-model="finishDate" v-bind:min="minDate">
          <article id="errors">
            <p v-if="badDate">Date should be correct</p>
          </article>
        </section>

        <span></span>
        <button v-on:click="calculate">Посчитать!</button>
        <span></span>
      </section>
    </article>

    <article class="widget single">
      <section class="content single">
        <section id="add">
          <label> Добавить к сумме:</label>
          <input type="number" name="add" v-model.number="add" min=1>
        </section>

        <span></span>
        <button v-on:click="addToSumm">Добавить:</button>
        <span></span>
      </section>
    </article>
  </section>
</template>

<script>
import moment from 'moment'
import storage from '../services/localstorageService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      minDate: moment().add(1, 'days').format('YYYY-MM-DD'),
      summ: 0,
      add: 0,
      finishDate: null,
      summZero: false,
      badDate: false
    }
  },
  methods: {
    addToSumm: function () {
      const updateSumm = storage.updateSumm(this.add)
      if (updateSumm[0]) console.error(updateSumm[0])
      else this.$router.push('/')
    },
    calculate: function () {
      if (!this.validation()) return

      const finishDate = moment(this.finishDate, 'YYYY-MM-DD').format('x')

      const setBalance = storage.setBalance(this.summ, finishDate)
      if (setBalance[0]) console.error(setBalance[0])
      else this.$router.push('/')
    },
    validation: function () {
      let valid = true

      if (this.summ === 0) {
        valid = false

        this.summZero = true
      }

      if (!this.finishDate || this.finishDate === '') {
        valid = false

        this.badDate = true
      }

      return valid
    }
  }
}
</script>

<style scoped>
  #new-balance {
    height: 40vh;
    font-size: 3vh;
  }
</style>
