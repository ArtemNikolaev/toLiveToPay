<template>
  <section id="home-section" class="col col-all">
    <today-balance></today-balance>

    <widget height="forty" padding="top" id="home-expenditures">
      <section class="content">
        <p>
          <span>💰</span>
          <span>Описание</span>
        </p>

        <p v-for="expenditure in expenses" :key="expenditure.datetime">
          <span>{{expenditure.summ}}💰</span>
          <span>{{expenditure.description}}</span>
        </p>
      </section>
    </widget>

    <widget height="thirty" padding="bottom" id="home-other">
      <section class="content">
        <span v-on:click='editBudget' class="edit">⚙</span>
        <article class="left">
          <p></p>
          <p>Дневной Бюджет:</p>
          <p>Осталось Дней:</p>
          <p>Осталось Денег:</p>
          <p></p>
        </article>
        <article class="right">
          <p></p>
          <p>{{moneyPerDay}}💰</p>
          <p>{{daysToSalary}}</p>
          <p>{{availableSumm}}💰</p>
          <p></p>
        </article>
      </section>
    </widget>
  </section>
</template>

<script>
import storage from '../../services/localstorageService'
import todayBalance from './todayBalance.component'
import widget from '../widget.component'

export default {
  name: 'Home',
  components: { todayBalance, widget },
  data () {
    const [err, data] = storage.homeCalculation()

    if (err) this.$router.push('/new')

    return data
  },
  methods: {
    add: function () {
      this.$router.push('/add')
    },
    editBudget: function () {
      this.$router.push('/new')
    }
  }
}
</script>

<style lang='scss' src='./home.component.scss'></style>
