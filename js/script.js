document.querySelector("input").addEventListener("click",num);
function num(){
var number1=Math.floor(((Math.random())*6)+1);
var number2=Math.floor(((Math.random())*6)+1);
var image1="img/Dice"+number1+".png";
var image2="img/Dice"+number2+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",image1);
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",image2);
if (number1>number2) {
    document.querySelector("h1").innerHTML="🥳 Player 1 win"
} else if(number2>number1){
    document.querySelector("h1").innerHTML="Player 2 win 🥳 "
}else{
    document.querySelector("h1").innerHTML="Match Draw"
}
}
