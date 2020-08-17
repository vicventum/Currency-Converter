// imports

// Variables
const screen = document.getElementById('screen'),
    input = document.getElementById('input'),
    currencyIn = document.getElementById('currency-in'),
    currencyOut = document.getElementById('currency-out'),
    change = document.getElementById('change'),
    reset = document.getElementById('reset'),
    submit = document.getElementById('submit')

// Listeners ===========================================
input.addEventListener('keyup', validate)
input.addEventListener('blur', cleanInput)

// Functions ===========================================
function validate(e) {
    const value = e.target.value;

    ( value.match(/^[\d\.\s]+$/gi) ) 
        ? input.classList.remove('input--invalid')
        : input.classList.add('input--invalid')
}

function cleanInput(e) {
    const value = e.target.value;
    if (value === '') input.classList.remove('input--invalid')
}