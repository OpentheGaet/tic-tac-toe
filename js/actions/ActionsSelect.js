export { ActionsSelect }

class ActionsSelect 
{
    elem;
    canceld = document.getElementById('canceld');
    
    constructor (tag) 
    {
        this.elem = tag;
        this.setActionForColor();
    }

    setActionForColor () 
    {
        if (!this.canceld.disabled) {
            return;
        }

        if (this.elem.childNodes[0].innerHTML) {
            return this.elem.style.backgroundColor = 'red';
        }
        return this.elem.style.backgroundColor = 'green';
    }
}