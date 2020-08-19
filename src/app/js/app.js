// imports
import {
    API
} from "./API";

// Variables
const screen = document.getElementById('screen'),
    input = document.getElementById('input'),
    currencyIn = document.getElementById('currency-in'),
    currencyOut = document.getElementById('currency-out'),
    change = document.getElementById('change'),
    reset = document.getElementById('reset'),
    submit = document.getElementById('submit')

// Object instances
const _API = new API()

// Listeners ===========================================
addEventListener('DOMContentLoaded', fillList)
input.addEventListener('keyup', validate)
input.addEventListener('blur', cleanInput)

// Functions ===========================================
function validate(e) {
    const value = e.target.value;

    (value.match(/^[\d\.\s]+$/gi)) ?
    input.classList.remove('input--invalid'): input.classList.add('input--invalid')
}

function cleanInput(e) {
    const value = e.target.value;
    if (value === '') input.classList.remove('input--invalid')
}


async function fillList() {
    await _API.getCurrencyCodes()
    const currencyList = _API.currencyList
    console.log(currencyList.USD);

    const fragment = document.createDocumentFragment()
    console.log(fragment);

    for (const code in currencyList) {
        const option = document.createElement('option')
        const name = currencyList[code].name
        // Inserte de code of de currency: option.textContent = code
        // Inserte the name of de currency
        option.textContent = name
        fragment.appendChild(option) 
        
    }
    
    currencyIn.appendChild(fragment.cloneNode(true))
    currencyOut.appendChild(fragment.cloneNode(true))
    
    // Marked Venezuelan Bolivar
    currencyOut.options[currencyOut.selectedIndex+1].setAttribute('selected', "selected");

}