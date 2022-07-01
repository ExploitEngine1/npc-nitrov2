var X8561 = 100; var X0198 = 200; var X6582 = 300; var Y3758 = 458;
var X7580 = 400; var X2589 = 500; var X4982 = 600; var X3749 = 789;
var X9904 = 700; var X3758 = 800; var X1985 = 900;  var X5410 = 558;
var X0589 = 1200; var X9047 = 1350; var X8652 = 1500; var X6741 = 540;
var X4856 = 1900; var X3896 = 2000; var Y4685 = 900; var X3054 = 240;
var Y8561 = 100; var Y0198 = 200; var Y6582 = 300;  var X4853 = 280;
var Y7580 = 400; var X0966 = 1000; var X7420 = 1700; var X9468 = 119;
var Y2589 = 500; var Y4982 = 600; var Y9904 = 700;  var X3468 = 110;
a1 = setInterval(function() {
let AcoordsX = [X9047, X3896, X7420, X8561, X0198, X6582, X7580, X2589, X4982, X9904, X3758, X1985, X0966, X0589, X8652, X4856]
let coordsX = Math.floor((Math.random() * AcoordsX.length));
let AcoordsY = [Y8561, Y0198, Y6582, Y7580, Y2589, Y4982, Y9904, Y9904, Y3758, Y4685]
let coordsY = Math.floor((Math.random() * AcoordsY.length));
document.querySelector("canvas").dispatchEvent(
new MouseEvent("click", {clientX: AcoordsX[coordsX],clientY: AcoordsY[coordsY],bubbles: true})); }, 1000);
setInterval(function() { if(document.getElementById("closeAd2"))
{ document.getElementById("closeAd2").click(); } else {
console.log("No ads found"); }}, 1500);
ve = setInterval(function() { effect(); }, 800);
function effect() {
var effectGen = Math.floor(Math.random() * 201);
let effect2 = [effectGen]
let effect1 = Math.floor((Math.random() * effect2.length));
var classes = document.getElementsByClassName('chat-input');
var test = classes[0];
test.value = ':effect ' + effect2[effect1]
f = document.getElementsByClassName("chat-input")[0];
f.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:!0})); }
dance(); function dance() {
var changeL = document.getElementsByClassName('d-flex cursor-pointer align-items-center justify-content-center navigation-item item-avatar');
var xc = changeL[0]; xc.click();
setTimeout(function() { 
var changeL2 = document.getElementsByClassName('d-flex w-100 align-items-center justify-content-center menu-item list-item');
var xc2 = changeL2[2]; xc2.click();
}, 1000);
setTimeout(function() {  
var changeL2 = document.getElementsByClassName('d-flex w-100 align-items-center justify-content-center menu-item list-item');
var xc2 = changeL2[2]; xc2.click();
}, 1000); }



