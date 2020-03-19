export { ActionsClick }

class ActionsClick 
{
    elem;
    sign      = document.getElementById('player-sign'); 
    canceld   = document.getElementById('canceld');
    submit    = document.getElementById('submit');
    cardinnal = document.getElementById('cardinal');

    constructor(tag) {
        this.elem = tag;
        this.setActionForGetting();
    }

    setActionForGetting()
    {
        if (!this.canceld.disabled) {
            return;
        }

        if (this.elem.childNodes[0].innerHTML !== '') {
            return alert('this field has already been played');
        }

        let td = document.getElementsByTagName('td');
        let a;

        for (a = 0; a < td.length; ++a) {
            td[a].style.backgroundColor = 'grey';
        }
        this.elem.style.backgroundColor = 'green';

        if (this.sign.innerHTML === 'O') {
            this.elem.childNodes[0].innerHTML = 'O';
        } else {
            this.elem.childNodes[0].innerHTML = 'X';
        }

        this.cardinnal.value  = this.elem.value;
        this.canceld.disabled = false;
        this.submit.disabled  = false;
        return this.cardinnal.value = this.elem.childNodes[1].value + '-' + this.elem.childNodes[0].innerHTML;
    }
}