export { ServicesVictory }

class ServicesVictory 
{
    td   = document.getElementsByTagName('td');
    sign = document.getElementById('player-sign');

    testVictoryY ()
    {
        let y1, y2, y3;
        let gainY1 = 0;
        let gainY2 = 0;
        let gainY3 = 0;

        for (y1 = 0; y1 <= 6; y1 +=3) {
            if (this.td[y1].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainY1++;
                if (gainY1 === 3) {
                    return true;
                } 
            }
        }

        for (y2 = 1; y2 <= 7; y2 +=3) {
            if (this.td[y2].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainY2++;
                if (gainY2 === 3) {
                    return true;
                } 
            }
        }

        for (y3 = 2; y3 <= 8; y3 +=3) {
            if (this.td[y3].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainY3++;
                if (gainY3 === 3) {
                    return true;
                } 
            }
        }
    }

    testVictoryX ()
    {
        let x1, x2, x3;
        let gainX1 = 0;
        let gainX2 = 0;
        let gainX3 = 0;

        for (x1 = 0; x1 <= 2; x1++) {
            if (this.td[x1].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainX1++;
                if (gainX1 === 3) {
                    return true;
                } 
            }
        }

        for (x2 = 3; x2 <= 5; x2++) {
            if (this.td[x2].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainX2++;
                if (gainX2 === 3) {
                    return true;
                } 
            }
        }

        for (x3 = 6; x3 <= 8; x3++) {
            if (this.td[x3].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainX3++;
                if (gainX3 === 3) {
                    return true;
                } 
            }
        }
    }

    testVictoryD ()
    {
        let d1, d2;
        let gainD1 = 0;
        let gainD2 = 0;

        for (d1 = 0; d1 <= 8; d1 += 4) {
            if (this.td[d1].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainD1++;
                if (gainD1 === 3) {
                    return true;
                } 
            }
        }

        for (d2 = 2; d2 <= 6; d2 += 2) {
            if (this.td[d2].childNodes[0].innerHTML === this.sign.innerHTML) {
                gainD2++;
                if (gainD2 === 3) {
                    return true;
                } 
            }
        }
    }
}