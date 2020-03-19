export { ServicesBoard }

class ServicesBoard 
{
    table = document.getElementById('game-board');

    setActionForBoard() 
    {
        let tag, a, b;
        
        for (a = 1; a <= 3; a++) {
            tag = document.createElement('tr');
            this.table.appendChild(tag);
            for (b = 1; b <= 3; b++) {
                let tag = document.createElement('td');
                this.table.childNodes[a].appendChild(tag);
            }
        }
    }

    setActionForInput() 
    {
        let a, b, c = 1;

        for (a = 1; a <= 3; a++) {
            for (b = 0; b < 3; ++b) {
                if (c > 3) {
                    c = 1;
                }
                this.table.childNodes[a]
                          .childNodes[b]
                          .innerHTML =
                            '<span></span>'
                          + '<input type="hidden" value="' + a + '-' + c + '"/>';
                c++;         
            }
        }
    }
}