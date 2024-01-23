var rN1= Math.floor(Math.random()*6)+1;
var rimg1="./images/dice"+rN1+".png";
document.querySelector("img.img1").setAttribute("src",rimg1);

var rN2= Math.floor(Math.random()*6)+1;
var rimg2="./images/dice"+rN2+".png";
document.querySelector("img.img2").setAttribute("src",rimg2);

if(rN1>rN2){
    document.querySelector("h1").innerHTML="Player 1 won 🥳";}
else if(rN2>rN1){
    document.querySelector("h1").innerHTML="Player 2 won 🥳";}
else{
    document.querySelector("h1").innerHTML="Match drawn 😕";}