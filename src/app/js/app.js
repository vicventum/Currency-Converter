// imports
import { API } from "./API";
import { UI } from "./UI";

// Variables
const input = document.getElementById('input'),
    currencyIn = document.getElementById('currencyIn'),
    currencyOut = document.getElementById('currencyOut'),
    change = document.getElementById('change'),
    btnsSuggestions = document.querySelectorAll('.btn--suggestion'),
    reset = document.getElementById('reset'),
    submit = document.getElementById('submit')


// Object instances
const _API = new API()
const _UI = new UI()

// Listeners ===========================================
addEventListener('DOMContentLoaded', fillList)
input.addEventListener('keyup', validate)
input.addEventListener('blur', cleanInput)
currencyIn.addEventListener('change', changeOption)
currencyOut.addEventListener('change', changeOption)
change.addEventListener('click', changeCurrency)
btnsSuggestions.forEach(btn => btn.addEventListener('click', getDataSuggestion))
reset.addEventListener('click', resetValues)
submit.addEventListener('click', getData)

// Functions ===========================================
function validate(e) {
    _UI.validate(e)
}
function cleanInput(e) {
    _UI.cleanInput(e)
}
// -------------

async function fillList() {
    await _API.getCurrencyCodes()
    const currencyList = _API.currencyList

    _UI.fillList(currencyList)

    getDataInitial()
}
// -------------

async function changeCurrency(e) {
    e.preventDefault()

    _UI.changeCurrency()
}
function changeOption(e) {
    // console.log(e.target.id);
    (e.target.id === 'currencyIn')
        ? _UI.changeOption('in')
        : _UI.changeOption('out')

}
// -------------
async function getDataInitial() {
    const {inSelected, outSelected} = _UI.getCurrencySelected

    await _API.getCurrencyValue(inSelected, outSelected)

    _UI.render(_API.getChangeValue)
}
async function getData(e) {
    e.preventDefault()

    const {inSelected, outSelected} = _UI.getCurrencySelected

    await _API.getCurrencyValue(inSelected, outSelected)

    const value = _UI.getValueToChange * _API.getChangeValue

    _UI.render(value)


}
async function getDataSuggestion(e) {
    e.preventDefault()

    const valueSuggestion = parseInt(e.target.textContent)

    await _API.getCurrencyValue(inSelected, outSelected)

    const value = valueSuggestion * _API.getChangeValue

    _UI.render(value)
}
function resetValues(e) {
    e.preventDefault()

    _UI.resetValues()
}