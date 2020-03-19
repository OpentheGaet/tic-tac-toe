import { ServicesBoard } from "./services/ServicesBoard.js";
 
export { ActionsBase }

class ActionsBase
{
    body      = document.getElementsByTagName('body'); 
    signBox   = document.getElementById('sign-box');
    introBox  = document.getElementById('intro-box');
    sign_O    = document.getElementById('sign-O');
    sign_X    = document.getElementById('sign-X');
    player_1  = document.getElementById('player-1');
    player_2  = document.getElementById('player-2');
    player    = document.getElementById('player-sign');
    count     = document.getElementById('count');
    reset     = document.getElementById('reset');
    setSign   = document.getElementById('set-sign');
    manager   = document.getElementById('board-manager');
    gameBoard = document.getElementById('game-board');

    constructor()
    {
        this.service = new ServicesBoard();

        this.setActionForGame();
        this.setActionForBoard();
    }

    setActionForGame()
    {
        this.sign_O.addEventListener('change', this.setActionForChoices.bind(this));
        this.sign_X.addEventListener('change', this.setActionForChoices.bind(this));
        this.setSign.addEventListener('click', this.setActionForChoices.bind(this));
        this.reset.addEventListener('click', this.setActionForChoices.bind(this));
    }

    setActionForChoices (event)
    {
        switch (event.type) {
            case 'change' :
                if (event.target.id === 'sign-X') 
                    return this.setEventForSign('X', 'O', this);
                if (event.target.id === 'sign-O') 
                    return this.setEventForSign('O', 'X', this);
            break;        
            case 'click' :
                if (event.target.id === 'reset')
                    return this.setEventForReset(this);
                if (event.target.id === 'set-sign')
                    return this.setEventForStartGame(this);
            break;
        }
    }

    setEventForSign (p1, p2, obj) 
    {
        obj.player_1.innerHTML = p1;
        obj.player_2.innerHTML = p2;
        obj.sign_O.disabled = true;    
        obj.sign_X.disabled = true;
        obj.sign_X.checked = true;
        obj.sign_O.checked = true;
        obj.setSign.disabled = false;
    }

    setEventForReset (obj)
    {
        obj.player_1.innerHTML = '';
        obj.player_2.innerHTML = '';
        obj.sign_X.disabled = false;
        obj.sign_O.disabled = false;
        obj.sign_X.checked = false;
        obj.sign_O.checked = false;
        obj.setSign.disabled = true;
    }

    setEventForStartGame (obj) 
    {
        obj.count.innerHTML  = 1;
        obj.introBox.style.display = 'none';
        obj.manager.style.display = 'block';
        obj.gameBoard.style.display = 'block';
        obj.player.innerHTML = obj.player_1.innerHTML;
    }

    setActionForBoard ()
    {
        this.service.setActionForBoard();
        this.service.setActionForInput();
    }   
}