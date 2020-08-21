async function getCurrencyList() {
  console.log('getCurrencyList')
  const result = await axios('https://api.exchangeratesapi.io/latest')
  console.log('currencies list are the following', Object.keys(result.data.rates))
  return Object.keys(result.data.rates)
}
getCurrencyList()

async function getCurrencyRates(currency1, currency2, count, date = 'latest') {
  console.log('getCurrencyRates')
  const result = await axios(`https://api.exchangeratesapi.io/${date}?base=${currency1}`)
  console.log('rates are the following', result.data.rates[currency2] * count)
  return result.data.rates[currency2] * count
}

getCurrencyRates('USD', 'EUR', 1)
