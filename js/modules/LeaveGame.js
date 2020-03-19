export { LeaveGame }

class LeaveGame 
{
    constructor() 
    {
        this.setChoice();
    }

    setChoice ()
    {
        window.onbeforeunload = function() {
            return "You are on the point to lost the current game";
        }
    }
}