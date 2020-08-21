async function getCurrencyList() {
    const result = await axios('https://api.exchangeratesapi.io/latest')
    console.log('currencies list are the following',Object.keys(result.data.rates))
    return Object.keys(result.data.rates)
}
getCurrencyList()

async function getCurrencyRates(currency1, currency2, count) {
    const result = await axios(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
    console.log('rates are the following',result.data.rates[currency2]*count)
    return result.data.rates
}



getCurrencyRates('USD', 'EUR', 2)