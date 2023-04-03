var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomImagesource = "images/" + randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage2 = "dice" + randomnumber2 + ".png";
var randomImagesource2 = "images/" + randomdiceimage2;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImagesource2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩🚩payer one wins";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "player two wins🚩🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩Both wins game🚩";
}
