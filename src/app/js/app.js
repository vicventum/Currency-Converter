// imports
import { API } from "./API";
import { UI } from "./UI";

// Variables
const screen = document.getElementById('screen'),
    input = document.getElementById('input'),
    currencyField = document.getElementById('currencyField'),
    currencyIn = document.getElementById('currencyIn'),
    currencyOut = document.getElementById('currencyOut'),
    change = document.getElementById('change'),
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

// Functions ===========================================
function validate(e) {
    _UI.validate(e)
}

function cleanInput(e) {
    _UI.cleanInput(e)
}


async function fillList() {
    await _API.getCurrencyCodes()
    const currencyList = _API.currencyList

    _UI.fillList(currencyList)
}


async function changeCurrency(e) {
    e.preventDefault()

    _UI.changeValue()
}
function changeOption(e) {
    // console.log(e.target.id);
    (e.target.id === 'currencyIn')
        ? _UI.changeOption('in')
        : _UI.changeOption(out)

}