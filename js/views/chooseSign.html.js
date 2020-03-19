export { chooseSign }

let chooseSign = `
<section id="sign-box">
<div id="intro-box">
    <h3>Please choose a sign between O and X</h3>
    <p>For O : <input type="checkbox" id="sign-O" value="O"></p>
    <p>For X : <input type="checkbox" id="sign-X" value="X"></p>
    <button id="reset">reset</button>
    <button id="set-sign" disabled="true">Confirm</button>
</div>
<hr />
<p style="color:green">Palyer 1 <span id="player-1"></span></p>
<p style="color:red">Palyer 2 <span id="player-2"></span></p>
<div id="board-manager">
    <p id="player-lap">Lap for : <span id="player-sign" style="font-weight:bold"></span> | Total laps : <span
            id="count" style="font-weight:bold"></span></p>
    <input type="button" id="canceld" class="sign-true" value="canceld" disabled="true" />
    <input type="button" id="submit" class="sign-true" value="submit" disabled="true" />
    <input type="hidden" id="cardinal" />
    <hr />
</section>
`;