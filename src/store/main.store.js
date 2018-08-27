import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    data
  }
})
