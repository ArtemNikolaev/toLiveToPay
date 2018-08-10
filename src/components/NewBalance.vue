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
import storage from '../services/localstorageService';

export default {
  name: 'HelloWorld',
  data () {
    return {
      minDate: moment().add(1, 'days').format('YYYY-MM-DD'),
      summ: 0,
      finishDate: null,
      summZero: false,
      badDate: false
    }
  },
  methods: {
    calculate: function () {
      if (!this.validation()) return;

      const finishDate = moment(this.finishDate, 'YYYY-MM-DD').format('x');

      storage.setBalance(this.summ, finishDate)
        .then(() => this.$router.push('/'))
        .catch(console.error);
    },
    validation: function() {
      let valid = true;

      if (this.summ === 0) {
        valid = false;

        this.summZero = true;
      }

      if (!this.finishDate || this.finishDate === '') {
        valid = false;

        this.badDate = true;
      }

      return valid;
    }
  }
}
</script>

<style scoped>

</style>
