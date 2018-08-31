import moment from 'moment'

const sumVarName = 'summ'
const finishDateVarName = 'finishDate'
const expensesVarName = 'expenses'

function getJSON (varName) {
  let value
  const str = localStorage.getItem(varName)

  try {
    value = JSON.parse(str)
  } catch (e) {
    setJSON(varName, [])
    return []
  }

  return value
}

function setJSON (varName, value) {
  if (!value) value = []

  localStorage.setItem(varName, JSON.stringify(value))

  return value
}

function getNumber (varName) {
  const value = Number(localStorage.getItem(varName))

  if (isNaN(value)) {
    return null
  }

  return value
}

function setNumber (varName, value) {
  if (isNaN(value)) value = 0

  localStorage.setItem(varName, value)

  return value
}

export default {
  namespaced: true,
  state () {
    return {
      sum: getNumber(sumVarName),
      finalDate: getNumber(finishDateVarName),
      expenses: getJSON(expensesVarName),
      today: Number(moment().startOf('day').format('x'))
    }
  },
  getters: {
    todaySpendings (state) {
      return state.expenses.filter(
        (expenditure) => expenditure.date === state.today
      )
    },
    todaySpendingsSumm (state, getters) {
      return getters.todaySpendings.reduce(
        (a, b) => a + b.summ, 0
      )
    },
    otherSpendings (state) {
      return state.expenses.filter(
        (expenditure) => expenditure.date !== state.today
      )
    },
    otherSpendingsSumm (state, getters) {
      return getters.otherSpendings.reduce((a, b) => a + b.summ, 0)
    },
    daysToSalary (state) {
      return (state.finalDate - Number(moment().startOf('day').format('x'))) / 1000 / 60 / 60 / 24
    },
    yesterdayAvailableSumm (state, getters) {
      return state.sum - getters.otherSpendingsSumm
    },
    availableSumm (state, getters) {
      return getters.yesterdayAvailableSumm - getters.todaySpendingsSumm
    },
    moneyPerDay (state, getters) {
      return Math.floor(getters.yesterdayAvailableSumm / getters.daysToSalary)
    },
    moneyForToday (state, getters) {
      return getters.moneyPerDay - getters.todaySpendingsSumm
    }
  },
  mutations: {
    setSum (state, sum) {
      if (isNaN(sum)) return state.sum

      setNumber(sumVarName, sum)
      return sum
    }
  },
  actions: {
    updateSumm (context, amount) {

    }
  }
}
