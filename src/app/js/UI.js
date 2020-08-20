export class UI {
    currencyIn = document.getElementById('currencyIn')
    currencyOut = document.getElementById('currencyOut')

    lastOption
    prevOut
    prevIn
    currencyOutSelected
    currencyInSelected
    

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


    async fillList(currencyList) {
    
        const fragmentIn = document.createDocumentFragment()
        const fragmentOut = document.createDocumentFragment()
        let countId = 0
    
        for (const code in currencyList) {
            const option = document.createElement('option')
            const name = currencyList[code].name
            // Insert de code of de currency: option.textContent = code
            // Insert the name of de currency
            option.textContent = name

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

        // Save Selected Index
        this.saveSelectedIndex()
    }
    saveSelectedIndex() {
        this.currencyInSelected = this.currencyIn.options[this.currencyIn.selectedIndex].value
        this.currencyOutSelected = this.currencyOut.options[this.currencyOut.selectedIndex].value
    }

    
    async changeOption(state) {
        
        this.clearList(state)

        if (state === 'in')
            currencyIn.options[currencyIn.selectedIndex].setAttribute('selected', true);
         else 
            currencyOut.options[currencyOut.selectedIndex].setAttribute('selected', true)

    }

    changeCurrency() {
        const IN =  this.currencyIn.selectedIndex
        const OUT = this.currencyOut.selectedIndex
        console.log(IN, OUT);

        this.clearLists()
        // currencyIn.options[currencyIn.selectedIndex].removeAttribute('selected', true)
        // currencyOut.options[currencyOut.selectedIndex].removeAttribute('selected', true)
        
        // Change
        this.currencyIn.selectedIndex  = OUT
        this.currencyOut.selectedIndex = IN
        currencyIn.options[currencyIn.selectedIndex].setAttribute('selected', true)
        currencyOut.options[currencyOut.selectedIndex].setAttribute('selected', true)
    }
    clearLists() {
        this.clearList('in')
        this.clearList('out')
    }
    clearList(state) {
        console.log( currencyIn.options[currencyIn.selectedIndex]);
       

        (state === 'in')
            ? [...this.currencyIn.options].forEach(option => option.removeAttribute('selected', true))
            : [...this.currencyOut.options].forEach(option => option.removeAttribute('selected', true))
            // ? currencyIn.options[currencyIn.selectedIndex].removeAttribute('selected')
            // : currencyOut.options[currencyOut.selectedIndex].removeAttribute('selected')
    }
}