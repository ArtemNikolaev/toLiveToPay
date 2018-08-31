<template>
  <md-content>
    <md-field>
      <label>Денег до ЗП:</label>
      <md-input v-model.number="summ" min=1 type="number"></md-input>
    </md-field>

    <md-datepicker v-model="finishDate" :md-disabled-dates="disabledDates">
      <label>Нужно дожить до:</label>
    </md-datepicker>

    <md-button class="md-raised" v-on:click="addToSumm">Посчитать!</md-button>
  </md-content>
</template>

<script>
import moment from 'moment'
import Vuex from 'vuex'

export default {
  name: 'input-data',
  data () {
    return {
      disabledDates: date => {
        return moment() > moment(date)
      }
    }
  },
  computed: Vuex.mapGetters('data', ['summ', 'finishDate']),
  methods: {
    addToSumm: function () {
      console.log('addToSumm: ', this.summ, this.finishDate)
    }
  }
}
</script>

<style scoped>
  .md-content {
    padding: 2% 10%;
    text-align: center;
  }
</style>
