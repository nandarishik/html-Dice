var random_number1 = Math.floor(Math.random()* 6) + 1;
var randomDiceImage = "dice"+random_number1+".png";
var radomImgSrc = "images/"+ randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src","images/"+ randomDiceImage);


var random_number2 = Math.floor(Math.random()* 6) + 1;
var randomDiceImage = "dice"+random_number2+".png";
var radomImgSrc = "images/"+ randomDiceImage;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src","images/"+ randomDiceImage);

if(random_number1> random_number2){
    document.querySelector(" h1").innerHTML ="player 1 wins!";
}else if(random_number1< random_number2){
    document.querySelector(" h1").innerHTML ="player 2 wins!";
}
else{
    document.querySelector(" h1").innerHTML ="draw!";
}