async function getCurrencyList() {
    const result = await axios('https://api.exchangeratesapi.io/latest')
    console.log('currencies list are the following',Object.keys(result.data.rates))
    return Object.keys(result.data.rates)
}


async function getCurrencyRates(currency1, currency2, count, date='latest') {
    const result = await axios(`https://api.exchangeratesapi.io/${date}?base=${currency1}`)
    console.log('rates are the following',result.data.rates[currency2]*count)
    return result.data.rates[currency2]*count
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
    const count = document.getElementById('currency-1').value
    getCurrencyRates(firstCurrency, secondCurrency, count).then(count => document.getElementById('currency-2').value = count)

})

