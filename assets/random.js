window.onload = choosePic;

var myPix = new Array("img/b-01.jpg", "img/b-02.jpg", "img/b-03.jpg", "img/b-04.jpg", "img/b-05.jpg", "img/b-06.jpg", "img/b-07.jpg", "img/b-08.jpg", "img/b-09.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("pic").src = myPix[randomNum];
}