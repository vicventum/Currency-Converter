export class UI {
    currencyIn = document.getElementById('currencyIn')
    currencyOut = document.getElementById('currencyOut')
    input = document.getElementById('input')
    screen = document.getElementById('screen')
    rootStylesGet = window.getComputedStyle(document.documentElement)

    prevOut
    prevIn
    currencyOutSelected
    currencyInSelected
    symbolOut

    get getCurrencySelected() {   
        this.symbolOut = currencyOut.options[currencyOut.selectedIndex].dataset.symbol
        return {
            inSelected: currencyIn.options[currencyIn.selectedIndex].dataset.code,
            outSelected: currencyOut.options[currencyOut.selectedIndex].dataset.code
        }
    }
    get getValueToChange() {
        return input.valueAsNumber
    }
    

    validate(e) {
        const value = e.target.value;
    
        (value.match(/^[\d\.\s]+$/gi)) 
            ? input.classList.remove('input--invalid')
            : input.classList.add('input--invalid')
    }
    cleanInput(e) {
        const value = e.target.value;
        if (value === '') input.classList.remove('input--invalid')
    }


    fillList(currencyList) {
    
        const fragmentIn = document.createDocumentFragment()
        const fragmentOut = document.createDocumentFragment()
        let countId = 0
    
        for (const code in currencyList) {
            const option = document.createElement('option')
            const name = currencyList[code].name
            // Insert de code of de currency: option.textContent = code
            // Insert the name of de currency
            option.textContent = name

            option.setAttribute('data-code', code)
            option.setAttribute('data-symbol', currencyList[code].symbol_native)

            option.id = `in-${countId}`
            fragmentIn.appendChild(option.cloneNode(true))
            option.id = `out-${countId}`
            fragmentOut.appendChild(option.cloneNode(true))
            countId++
        }
        console.log(fragmentIn);
        console.log(fragmentOut);
    
        this.currencyIn.appendChild(fragmentIn.cloneNode(true))
        this.currencyOut.appendChild(fragmentOut.cloneNode(true))
        
        // Marked US Dollar and Venezuelan Bolivar
        this.currencyIn.options[this.currencyIn.selectedIndex].setAttribute('selected', true)
        this.currencyOut.options[this.currencyOut.selectedIndex + 1].setAttribute('selected', true)
        // Save last selected index of currencyIn and currencyOut
        this.prevIn =  currencyIn.options[currencyIn.selectedIndex]
        this.prevOut =  currencyOut.options[currencyOut.selectedIndex]

        // Save Selected Index
        this.saveSelectedIndex()
    }
    saveSelectedIndex() {
        this.currencyInSelected = this.currencyIn.options[this.currencyIn.selectedIndex].value
        this.currencyOutSelected = this.currencyOut.options[this.currencyOut.selectedIndex].value
    }

    
    async changeOption(state) {
        
        this.clearList(state)

        if (state === 'in') {
            currencyIn.options[currencyIn.selectedIndex].setAttribute('selected',  true);
            this.prevIn =  currencyIn.options[currencyIn.selectedIndex]
        }
         else {
             currencyOut.options[currencyOut.selectedIndex].setAttribute('selected', true)
             this.prevOut =  currencyOut.options[currencyOut.selectedIndex]
         }
    }

    changeCurrency() {
        const IN =  this.currencyIn.selectedIndex
        const OUT = this.currencyOut.selectedIndex
        console.log(IN, OUT);

        this.clearLists()
        
        // Change
        this.currencyIn.selectedIndex  = OUT
        this.currencyOut.selectedIndex = IN
        currencyIn.options[currencyIn.selectedIndex].setAttribute('selected', true)
        currencyOut.options[currencyOut.selectedIndex].setAttribute('selected', true)

        this.prevIn =  currencyIn.options[currencyIn.selectedIndex]
        this.prevOut =  currencyOut.options[currencyOut.selectedIndex]
    }
    clearLists() {
        this.clearList('in')
        this.clearList('out')
    }
    clearList(state) {
        (state === 'in')
            ? this.prevIn.removeAttribute('selected')
            : this.prevOut.removeAttribute('selected')
    }

    render(value) {
        if (value) {
            const valueString = value.toString()
            
    
            // Split point
            const valueInt = (valueString.split('.'))[0]
            const valueFloat = (valueString.split('.'))[1]
            console.log(valueInt);
    
            const cant = Math.ceil(valueInt.length / 3)
            console.log('>>>' + cant);
    
            const valueArray = []
    
            let unit = -3
            
            for (let i = 1; i <= cant; i++) {
                const slideValue = ((unit + 3) === 0) ? undefined : (unit + 3)
                valueArray.unshift(valueInt.slice(unit, slideValue))
                unit -= 3
                console.log('> ' + unit);
            }
            const valueStringFormated = valueArray.join(' ')
            console.log(valueStringFormated);
    
            if (valueString.length > 6) 
                this.screen.style.fontSize = '3rem'
            else 
                this.screen.style.fontSize = this.rootStylesGet.getPropertyValue('--f-big')

            console.log(this.rootStylesGet.getPropertyValue('--f-big'));

            this.screen.textContent = `${this.symbolOut} ${valueStringFormated}.${valueFloat}`
        }else {
            this.screen.style.fontSize = '3rem'
            this.screen.textContent = 'No Internet :('
        }
    }


    resetValues() {
        this.screen.textContent = 0
        this.input.value = ''
    }
}