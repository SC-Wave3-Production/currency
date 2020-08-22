async function getCurrencyList() {
  const result = await axios('https://api.exchangeratesapi.io/latest?base=USD')
  const currencyList = Object.keys(result.data.rates).sort()
  console.log('currencies list are the following', currencyList)
  return currencyList
}


async function getCurrencyRates(currency1, currency2, count, date = 'latest') {
  console.log([...arguments])
  if (currency1 === currency2) {
    return count
  }
  const result = await axios(`https://api.exchangeratesapi.io/${date}?base=${currency1}`)
  const rate = result.data.rates[currency2] * count
  console.log('rates are the following', rate)
  return rate
}


function createOption(selectID, textCurrency) {
  let newOption = document.createElement('option')
  document.getElementById(selectID).appendChild(newOption).innerText = textCurrency;
}


getCurrencyList().then(item => item.forEach(it => {
  createOption('dropdown-1', it)
  createOption('dropdown-2', it)
}))


document.getElementById('calc-btn').addEventListener('click', function () {
  const firstCurrency = document.getElementById('dropdown-1').value
  const secondCurrency = document.getElementById('dropdown-2').value
  const regex = /^(\d)+$|^(\d+(\.|\,)\d+)$/g
  let count = document.getElementById('currency-1').value
  if (regex.test(count)) {
    count = count.replace(/\,/, '.')
  } else {
    document.getElementById('currency-2').value = 'Wrong count'
    return console.log('Wrong count')
  }
  console.log(count)
  getCurrencyRates(firstCurrency, secondCurrency, count).then(count => document.getElementById('currency-2').value = count)
})

