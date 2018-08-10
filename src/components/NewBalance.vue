<template>
  <article>
    <section id="summ">
      <label>Amount of money</label>
      <input type="number" name="summ" v-model.number="summ" min=1>
      <article id="errors">
        <p v-if="summZero">Amount can't be 0</p>
      </article>
    </section>

    <section id="date">
      <label>To live up to:</label>
      <input type="date" name="date" v-model="finishDate" v-bind:min="minDate">
      <article id="errors">
        <p v-if="badDate">Date should be correct</p>
      </article>
    </section>

    <button v-on:click="calculate">Calculate</button>
  </article>
</template>

<script>
import moment from 'moment';

export default {
  name: 'HelloWorld',
  data () {
    return {
      minDate: moment().format('YYYY-MM-DD'),
      msg: 'Welcome to Your Vue.js App',
      summ: 0,
      finishDate: new Date(),
      summZero: false,
      badDate: false
    }
  },
  methods: {
    calculate: function () {
      let error = false;

      if (this.summ === 0) {
        error = false;

        this.summZero = true;
      }

      if (!this.finishDate || this.finishDate === '') {
        error = false;

        this.badDate = true;
      }

      if (error) return;

      
    }
  }
}
</script>

<style scoped>

</style>
