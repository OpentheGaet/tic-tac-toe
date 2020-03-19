export { ActionsUnSelect }

class ActionsUnSelect
{
    elem = document.getElementsByTagName('td');
    canceld = document.getElementById('canceld');

    constructor()
    {
        this.setActionForColor();
    }

    setActionForColor() 
    {
        let nbTd = this.elem.length;
        let a;

        if (!this.canceld.disabled) {
            return;
        }

        for (a = 0; a < nbTd; ++a) {
            this.elem[a].style.backgroundColor = 'gainsboro';
        }
        return;
    }
}