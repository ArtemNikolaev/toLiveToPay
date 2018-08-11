import moment from 'moment'

class LocalstorageService {
  summ = 'summ'
  finishDate = 'finishDate'
  expenses = 'expenses'

  _getJSON (varName) {
    let value
    const str = localStorage.getItem(varName)

    if (!str) return [new Error(`[LocalstorageService:_getSumm()] - \`${varName}\` is not defined`)]

    try {
      value = JSON.parse(str)
    } catch (e) {
      return [e]
    }

    return [null, value]
  }

  _setJSON (varName, value) {
    if (!value) return [new Error(`[LocalstorageService:_setJSON] - \`${varName}\` is not definad`)]

    localStorage.setItem(varName, JSON.stringify(value))

    return [null]
  }

  _getNumber (varName) {
    const value = Number(localStorage.getItem(varName))

    if (isNaN(value)) return [new Error(`[LocalstorageService:_getSumm()] - \`${varName}\` is not defined or not a number`)]
    else return [null, value]
  }

  _setNumber (varName, value) {
    if (isNaN(value)) return [new Error(`[LocalstorageService:_setSumm()] - \`${varName}\` should be a number`)]

    localStorage.setItem(varName, value)

    return [null]
  }

  _removeItem (varName) {
    localStorage.removeItem(varName)

    return [null]
  }

  setBalance (summ, finishDate) {
    const setSumm = this._setNumber(this.summ, summ)
    if (setSumm[0]) return [setSumm[0]]

    const setFinishDate = this._setNumber(this.finishDate, finishDate)
    if (setFinishDate[0]) return [setFinishDate[0]]

    const setExpenses = this._setJSON(this.expenses, [])
    if (setExpenses[0]) return [setExpenses[0]]

    return [null]
  }

  addExpenditure (summ, description, date) {
    const expenditure = {
      summ,
      description,
      date: Number(date),
      time: moment() - moment().startOf('day'),
      datetime: moment().format('x')
    }
    const expenses = this._getJSON(this.expenses)
    if (expenses[0]) return [expenses[0]]

    expenses[1].push(expenditure)

    this._setJSON(this.expenses, expenses[1])

    return [null]
  }

  homeCalculation () {
    const defaultData = {
      daysToSalary: null,
      moneyPerDay: null,
      moneyForToday: null,
      expenses: []
    }

    const [expensesError, expenses] = this._getJSON(this.expenses)
    if (expensesError) return [expensesError, defaultData]

    const [finishDateError, finishDate] = this._getNumber(this.finishDate)
    if (finishDateError) return [finishDateError, defaultData]

    const [summError, summ] = this._getNumber(this.summ)
    if (summError) return [summError, defaultData]

    const today = Number(moment().startOf('day').format('x'))

    const todaySpendings = expenses.filter((expenditure) => expenditure.date === today)
    const todaySpendingsSumm = todaySpendings.reduce((a, b) => a + b.summ, 0)

    const otherSpendings = expenses.filter((expenditure) => expenditure.date !== today)
    const otherSpendingsSumm = otherSpendings.reduce((a, b) => a + b.summ, 0)

    const daysToSalary = (finishDate - moment().startOf('day').format('x')) / 1000 / 60 / 60 / 24

    const moneyPerDay = Math.floor((summ - otherSpendingsSumm) / daysToSalary)
    const moneyForToday = moneyPerDay - todaySpendingsSumm

    return [
      null,
      {
        daysToSalary,
        moneyPerDay,
        moneyForToday,
        expenses: todaySpendings
      }
    ]
  }
}

export default new LocalstorageService()
