import { ServicesVictory } from "./services/ServicesVictory.js";

export { ActionsSubmit }

class ActionsSubmit 
{
    axis_Y
    axis_X
    cardinal
    td           = document.getElementsByTagName('td');
    sign         = document.getElementById('player-sign')
    canceld      = document.getElementById('canceld');
    submit       = document.getElementById('submit');
    playerSign   = document.getElementById('player-sign');
    totalLaps    = document.getElementById('count');
    mainBox      = document.getElementById('main-box');
    boardManager = document.getElementById('board-manager');

    constructor (tag)
    {
        this.victory = new ServicesVictory();

        this.elem = tag;
        this.getData();
    }

    getData() 
    {
        this.cardinal = this.elem.nextSibling.nextElementSibling.value;

        if (!this.cardinal) {
            throw('Cardinal can not be send');
        }
        this.nextLap();
    }

    changeSign()
    {
        if (this.playerSign.innerHTML === 'X') {
            return this.playerSign.innerHTML = 'O';
        } 
        this.playerSign.innerHTML = 'X';
    }

    nextLap()
    {
        let a;
        let compare = this.cardinal.substring(0, 3);

        for (a = 0; a < this.td.length; ++a) {
            if (this.td[a].childNodes[1].value === compare) {
                this.td[a].className = 'played';
            }
            this.td[a].style.backgroundColor = 'gainsboro';
        }

        this.changeLap();
        this.changeSign();
        this.canceld.disabled = true;
        this.submit.disabled  = true;
    }

    checkVictory() 
    {
        if (this.victory.testVictoryY())
            return true;
        else if (this.victory.testVictoryX())
            return true;
        else if (this.victory.testVictoryD())
            return true;
        else
            return false;
    }

    changeLap() 
    {
        let lap = parseInt(this.totalLaps.innerHTML);
        this.totalLaps.innerHTML = ++lap;
        
        if (lap > 9) {
            return this.stopGame();
        } 

        if (this.checkVictory()) {
            return this.setVictory();
        }
    }

    stopGame()
    {
        this.boardManager.style.display = 'none';
        this.mainBox.innerHTML = '';
        this.mainBox.innerHTML = `
            <p>The game has been finished without a winner</p>
            <a href="./">restart</a>
        `;
    }

    setVictory()
    {
        this.boardManager.style.display = 'none';
        this.mainBox.innerHTML = '';
        this.mainBox.innerHTML = `
            <p>The <b>` + this.playerSign.innerHTML + `</b> wins, well done :-)</p>
            <a href="./">restart</a>
        `;
    }
}