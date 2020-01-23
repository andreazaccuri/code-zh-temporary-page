const myPix = ["img/b-01.jpg", "img/b-02.jpg", "img/b-03.jpg", "img/b-04.jpg", "img/b-05.jpg", "img/b-06.jpg", "img/b-07.jpg", "img/b-08.jpg", "img/b-09.jpg", "img/b-10.jpg", "img/b-11.jpg", "img/b-12.jpg", "img/b-13.jpg", "img/b-14.jpg", "img/b-15.jpg", "img/b-16.jpg", "img/b-17.jpg"];
const info = ["Blättler Dafflon, Invitation Card (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)",
"Realgmnasium Rämibühl Zürich, Printed Matters (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)",
"Blättler Dafflon, Invitation Card (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)",
"Frohheim, Magazine (Illustration:&nbsp;&#169;Leander&nbsp;Eisenmann)",
"Frohheim, Magazine (Illustration:&nbsp;&#169;Anja&nbsp;Peter)",
"Frohheim, Magazine (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)",
"anfos/haus, Printed Matter",
"Frank Ghery On Line, Book",
"Frank Ghery On Line, Book",
"Realgmnasium Rämibühl Zürich, Printed Matters (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)",
"Realgmnasium Rämibühl Zürich, T-Shirt",
"Very Much Dutch, Poster",
"anfos/haus, Signage",
"Riedgraben, Signage",
"Riedgraben, Signage",
"Realgmnasium Rämibühl Zürich, Keychain",
"Park Avenue Armory, Signage"]
window.onload = () => {
     const randomNum = Math.floor(Math.random() * myPix.length);
     document.body.style.backgroundImage = `url(${myPix[randomNum]})`;
     document.getElementById("info-display").innerHTML = info[randomNum];
}

targetElement.ontouchend = (e) => {
     e.preventDefault();
 };