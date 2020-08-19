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
    
        const fragment = document.createDocumentFragment()
    
        for (const code in currencyList) {
            const option = document.createElement('option')
            const name = currencyList[code].name
                // Insert de code of de currency: option.textContent = code
            // Insert the name of de currency
            option.textContent = name
            fragment.appendChild(option) 
            
        }
    
        this.currencyIn.appendChild(fragment.cloneNode(true))
        this.currencyOut.appendChild(fragment.cloneNode(true))
        
        // Marked US Dollar and Venezuelan Bolivar
        this.currencyIn.options[this.currencyIn.selectedIndex].setAttribute('selected', true)
        this.currencyOut.options[this.currencyOut.selectedIndex + 1].setAttribute('selected', true)

        // Save Selected Index
        this.saveSelectedIndex()

        // Save prevIn and prevOut
        this.prevOut = this.currencyOutSelected
        this.prevIn = this.currencyInSelected
    }
    saveSelectedIndex() {
        this.currencyOutSelected = this.currencyOut.options[this.currencyOut.selectedIndex].value
        this.currencyInSelected = this.currencyIn.options[this.currencyIn.selectedIndex].value
    }


    async changeCurrency() {
    
        const currencyInOpts = [...this.currencyIn.options]
        const currencyOutOpts = [...this.currencyOut.options]
    
        // Save Selected Index
        this.saveSelectedIndex()
    
        // Go through list
        await this.changeValue(currencyInOpts, this.currencyOutSelected)
        await this.changeValue(currencyOutOpts, this.currencyInSelected)
    
    }
    
    async changeOption(currency) {
        const currencyOpts = [...currency.options]
        const currencySelected = currency.options[currency.selectedIndex].value

        this.saveSelectedIndexOption(currency)

        this.changeValue(currencyOpts, currencySelected)
    }
    saveSelectedIndexOption(currency) {
        (currency.id === 'currencyIn')
            ? this.currencyInSelected = this.currencyIn.options[this.currencyIn.selectedIndex].value
            : this.currencyInSelected = this.currencyOut.options[this.currencyOut.selectedIndex].value
    }

    async changeValue(list, currencySelected) {
        
        list.forEach(option => {
    
            // Remove last atribute 
            if (option.value === this.prevIn || option.value === this.prevOut) {
                option.removeAttribute('selected', true);
                console.log('-->' + this.prevIn);
            }
    
            // Add atribute
            if (option.value === currencySelected) {
                console.log('=>' + currencySelected);
                this.prevIn = this.currencyInSelected
                this.prevOut = this.currencyOutSelected
    
                
                // currencyInSelected = currencyOutSelected
                option.setAttribute('selected', true);
            }
        });
    }
}