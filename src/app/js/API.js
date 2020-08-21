// CDF - EEK - ERN - LTL - LVL - TOP - ZWL
// https://fcsapi.com/document/forex-api#forexsupportedcurrency
import db from './db/db.json'  // FIXME:
export class API {
    DB_CURRENCY = 'https://gist.githubusercontent.com/vicventum/af3d829794d25d3f29741aaa21c0c147/raw/e436df97aa0990df7b50772780f5c12e36ac1654/Common-Currency.min.json'
    // URL_API = `https://fcsapi.com/api-v2/forex/converter?pair1=EUR&pair2=USD&amount=200&access_key=f901ivabhvt4pMh4W2wStKhVEGrkfOz2tR6E7wGHgalcU`
    
    API_KEY = 'f901ivabhvt4pMh4W2wStKhVEGrkfOz2tR6E7wGHgalcU'
    currencyList = {}

    changeValue
    value1xIn
    value1xOut

    // getters y setters
    get getChangeValue() {return this.changeValue}
    get getCurrencyList() {return this.currencyList}
    set setData(data) {this.data = Object.assign({}, data)}


    async getCurrencyCodes() {
        try {
            // const res = await fetch(db)
            // const rawData = await res.json()
            // this.currencyList = {...rawData}

            this.currencyList = await db // FIXME:

        } catch (error) {
            console.log(error);
        }
    }

    async getCurrencyValue(valueIn, valueOut) {
        try {
            const res = await fetch(`https://fcsapi.com/api-v2/forex/converter?pair1=${valueIn}&pair2=${valueOut}&amount=1&access_key=${this.API_KEY}`)

            const rawData = await res.json()
            console.log(rawData);
            this.changeValue = rawData.response.total
            this.value1xIn = rawData.response[`price_1x_${valueIn}`]
            this.value1xOut = rawData.response[`price_1x_${valueOut}`]

            console.log(this.changeValue, this.value1xIn, this.value1xOut);
        } catch (error) {
            console.log(error);
        }
    }
 
}