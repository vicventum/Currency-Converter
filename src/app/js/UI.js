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

            option.id = countId
            fragmentIn.appendChild(option.cloneNode(true))
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

        // Save prevIn and prevOut
        this.prevOut = this.currencyOutSelected
        this.prevIn = this.currencyInSelected

        console.log('se dispara?');
    }
    saveSelectedIndex() {
        this.currencyInSelected = this.currencyIn.options[this.currencyIn.selectedIndex].value
        this.currencyOutSelected = this.currencyOut.options[this.currencyOut.selectedIndex].value
    }


    async changeCurrency() {
    
        // Save Selected Index
        // this.saveSelectedIndex()
    
        // Go through list
        this.changeValue()
    }
    
    async changeOption(state) {
        
        // Save Selected Index
        this.saveSelectedIndex()
        
        this.clearList(state)


        let option
        if (state === 'in') 
            option = document.getElementById(`in-${this.currencyInSelected}`)
         else 
            option = document.getElementById(`out-${this.currencyOutSelected}`)
        
        option.setAttribute('selected', true);
        console.log(`${state}-${this.currencyInSelected}`);
        // console.log(option);

    }

    changeValue() {
        const IN =  this.currencyIn.selectedIndex
        const OUT = this.currencyOut.selectedIndex
        console.log(IN, OUT);
        this.clearLists()
        
        
        console.log('------------------');
        // this.clearLists()

        // Change
        this.currencyIn.selectedIndex  = OUT
        this.currencyOut.selectedIndex = IN
        currencyIn.options[currencyIn.selectedIndex].setAttribute('selected', true);
        currencyOut.options[currencyOut.selectedIndex].setAttribute('selected', true);
    }
    clearLists() {
        this.clearList('in')
        this.clearList('out')
    }
    clearList(state) {

        (state === 'in')
            ? [...this.currencyIn.options].forEach(option => option.removeAttribute('selected', true))
            : [...this.currencyOut.options].forEach(option => option.removeAttribute('selected', true))
    }
}