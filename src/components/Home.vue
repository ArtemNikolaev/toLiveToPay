<template>
  <section id="home-section" class="col col-all">
    <article id="home-current" class="widget">
      <section class="content">
        <p></p>
        <p>Бюджет на сегодня:</p>
        <p>{{moneyForToday}}💰</p>
        <button v-on:click='add'>Потратить!</button>
        <p></p>
      </section>
    </article>

    <article id="home-expenditures" class="widget">
      <section class="content">
        <p>
          <span>💰</span>
          <span>Описание</span>
        </p>

        <p v-for="expenditure in expenses" :key="expenditure.datetime">
          <span>{{expenditure.summ}}💰</span>
          <span>{{expenditure.description}}</span>
        </p>

        <!-- <article class="left">
          <p>💰</p>
          <p v-for="expenditure in expenses" :key="expenditure.datetime">{{expenditure.summ}}💰</p>
        </article>
        <article class="right">
          <p>Description</p>
          <p v-for="expenditure in expenses" :key="expenditure.datetime">{{expenditure.description}}</p>
        </article> -->
      </section>
    </article>

    <article id="home-other" class="widget">
      <section class="content">
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
    </article>
  </section>
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
  #home-current, #home-other {
    height: 30vh;
    padding: 5%;
  }

  #home-expenditures {
    height: 40vh;
  }

  #home-other .content,
  #home-current .content {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 3.5vh;
  }

  #home-current .content {
    flex-direction: column;
    justify-content: space-around;
  }

  #home-expenditures .content{
    font-size: 3.5vh;
    overflow-x: scroll;
  }
  #home-expenditures .content p {
    display: flex;
    align-items: space-between;

    text-align: left;
    min-height: 4vh;
    margin: 0.5vh 0.5vw;
  }

  #home-expenditures .content p span:nth-child(1) {
    text-align: right;
    width: 30%;
  }
  #home-expenditures .content p span:nth-child(2) {
    width: 70%;
  }
  #home-expenditures .content p span:nth-child(2):first-letter {
    text-transform: capitalize;
  }

  #home-other .content article   {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left {
    text-align: right;
  }

  .right {
    text-align: left;
    padding-left: 2vw;
  }
</style>
