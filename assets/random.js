const myPix = ["img/b-01.jpg", "img/b-02.jpg", "img/b-03.jpg", "img/b-04.jpg", "img/b-05.jpg", "img/b-06.jpg"];
const info = ["c1", "c2", "c3", "c4", "c5", "c6"]
window.onload = () => {
     const randomNum = Math.floor(Math.random() * myPix.length);
     document.body.style.backgroundImage = `url(${myPix[randomNum]})`;
     document.getElementById("info-display").innerHTML = info[randomNum];
}