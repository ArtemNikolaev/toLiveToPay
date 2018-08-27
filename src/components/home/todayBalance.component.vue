<template>
    <widget height="thirty" padding="top">
        <section class="content">
            <p></p>
            <p>Бюджет на сегодня:</p>
            <p>{{moneyForToday}}💰</p>
            <appButton
              title="Потратить!"
              v-on:button-clicked="add"
            >
            </appButton>
            <p></p>
        </section>
    </widget>
</template>

<script>
import appButton from '../button.component'
import Vuex from 'vuex'
import widget from '../widget.component'

export default {
  name: 'today-balance',
  components: { appButton, widget },
  computed: Vuex.mapGetters('data', ['moneyForToday']),
  methods: {
    add: function () {
      this.$router.push('/add')
    }
  }
}
</script>

<style lang='scss' scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 3.5vh;
        justify-content: space-around;
    }
</style>
