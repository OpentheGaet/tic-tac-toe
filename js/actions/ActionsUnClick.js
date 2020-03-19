export { ActionsUnClick }

class ActionsUnClick {

    elem;
    canceld = document.getElementById('canceld');
    submit  = document.getElementById('submit'); 

    constructor() 
    {
        this.setActionForUnClick();   
    }

    setActionForUnClick ()
    {
        let td = document.getElementsByTagName('td');
        let a;
        
        for (a = 0; a < td.length; ++a) {
            if (td[a].childNodes[0].innerHTML !== '' && td[a].className === '') {
                td[a].childNodes[0].innerHTML = '';
            } 
            td[a].style.backgroundColor = 'gainsboro';
        }
        this.canceld.disabled = true;
        this.submit.disabled = true;
    }
}