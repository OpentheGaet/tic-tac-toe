import { ActionsSelect } from '../actions/ActionsSelect.js';
import { ActionsUnSelect } from '../actions/ActionsUnSelect.js';
import { ActionsClick } from '../actions/ActionsClick.js';
import { ActionsUnClick } from '../actions/ActionsUnClick.js';
import { ActionsSubmit } from '../actions/ActionsSubmit.js';

export { HandlerEvents }

class HandlerEvents 
{
    submit  = document.getElementById('submit');
    canceld = document.getElementById('canceld');
    
    constructor () 
    {
        this.setEvents();
    }

    setEvents ()
    {
        let i; 
        let nbTd = document.getElementsByTagName('td').length;
        let td = document.getElementsByTagName('td');

        for (i = 0; i < nbTd; ++i) {
            td[i].addEventListener('mouseover', this.eventsHandler);
            td[i].addEventListener('mouseout', this.eventsHandler);
            td[i].addEventListener('click', this.eventsHandler);
        }
        this.canceld.addEventListener('click', this.eventsHandler);
        this.submit.addEventListener('click', this.eventsHandler);

    }

    eventsHandler(event)
    {
        switch(event.type) {
            case 'mouseover' :
                if (event.target.tagName === 'TD' && canceld)
                    return new ActionsSelect(this);
            break;
            case 'mouseout' :
                if (event.target.tagName === 'TD' && canceld)
                    return new ActionsUnSelect();
            break;
            case 'click' :
                if (event.target.tagName === 'TD' && canceld)
                    return new ActionsClick(this);
                if (event.target.id === 'canceld')
                    return new ActionsUnClick(this);
                if (event.target.id === 'submit')
                    return new ActionsSubmit(this);
            break;
        }
    }
}