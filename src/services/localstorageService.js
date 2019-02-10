import moment from 'moment'

class LocalstorageService {
  summ = 'summ'
  finishDate = 'finishDate'
  expenses = 'expenses'
  startDate = 'startDate'

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
    let value = localStorage.getItem(varName)

    if (!value) return [new Error(`[LocalstorageService:_getSumm()] - \`${varName}\` is not defined`)]

    value = Number(value)

    if (isNaN(value)) return [new Error(`[LocalstorageService:_getSumm()] - \`${varName}\` is  not a number`)]
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

  setBalance (summ, finishDate, startDate) {
    const setSumm = this._setNumber(this.summ, summ)
    if (setSumm[0]) return [setSumm[0]]

    const setFinishDate = this._setNumber(this.finishDate, finishDate)
    if (setFinishDate[0]) return [setFinishDate[0]]

    this._setStartDate(startDate)

    const setExpenses = this._setJSON(this.expenses, [])
    if (setExpenses[0]) return [setExpenses[0]]

    return [null]
  }

  _setStartDate (date) {
    if (!date) date = moment().startOf('day').format('x')

    this._setNumber(this.startDate, date)

    return date
  }

  addExpenditure (summ, description, date) {
    const expenditure = {
      summ,
      description: description || '—',
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

  updateSumm (add) {
    const [err, summ] = this._getNumber(this.summ)
    if (err) return [err]

    this._setNumber(this.summ, summ + add)

    return [null]
  }

  homeCalculation () {
    const defaultData = {
      daysToSalary: null,
      moneyPerDay: null,
      moneyForToday: null,
      expenses: [],
      availableSumm: null
    }

    // startDate
    let [startDateError, startDate] = this._getNumber(this.startDate)
    if (startDateError) startDate = this._setStartDate()

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
    const days = (finishDate - startDate) / 1000 / 60 / 60 / 24
    const yesterdayAvailableSumm = summ - otherSpendingsSumm
    const availableSumm = (yesterdayAvailableSumm - todaySpendingsSumm).toFixed(2)

    const moneyPerDay = Number((summ / days).toFixed(2))
    const moneyPerDayActual = (yesterdayAvailableSumm / daysToSalary).toFixed(2)
    const moneyPerDay1 = (moneyPerDayActual < moneyPerDay)
      ? moneyPerDayActual
      : moneyPerDay + (summ - daysToSalary * moneyPerDay - otherSpendingsSumm)
    const moneyForToday = (moneyPerDay1 - todaySpendingsSumm).toFixed(2)

    return [
      null,
      {
        daysToSalary,
        moneyPerDay,
        moneyForToday,
        expenses: todaySpendings,
        availableSumm
      }
    ]
  }
}

export default new LocalstorageService()
