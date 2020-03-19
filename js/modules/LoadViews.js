import { header } from '../views/header.html.js';
import { chooseSign } from '../views/chooseSign.html.js';
import { setBoard } from '../views/setBoard.html.js';

export { LoadViews }

class LoadViews 
{
    body    = document.getElementsByTagName('body');
    valid   = document.getElementById('valid');
    signBox = document.getElementById('sign-box');

    constructor () 
    {
        self.header     = header;
        self.chooseSign = chooseSign;
        self.setBoard   = setBoard;
        
        this.setDisplayer();
    }

    setDisplayer () 
    {
        this.body[0].innerHTML = 
            self.header + 
            self.chooseSign +
            self.setBoard;
    }

}