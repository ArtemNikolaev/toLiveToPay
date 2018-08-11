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
    const value = localStorage.getItem(varName)

    if (isNaN(value)) return [new Error(`[LocalstorageService:_getSumm()] - \`${varName}\` is not defined or not a number`)]
    else return [null]
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

  addExpenditure (summ, description) {
    const expenditure = {
      summ,
      description,
      date: moment().startOf('day').format('x'),
      time: moment() - moment().startOf('day')
    }
    const expenses = this._getJSON(this.expenses)
    if (expenses[0]) return [expenses[0]]

    expenses[1].push(expenditure)

    this._setJSON(this.expenses, expenses[1])

    return [null]
  }

  homeCalculation () {
    return {
      loading: true,
      daysToSalary: 10,
      moneyPerday: 20,
      moneyForToday: 30,
      todaysSpendings: 40
    }
  }
}

export default new LocalstorageService()
