const myPix = ["img/b-01.jpg", "img/b-02.jpg", "img/b-03.jpg", "img/b-04.jpg", "img/b-05.jpg", "img/b-06.jpg", "img/b-07.jpg", "img/b-08.jpg", "img/b-09.jpg", "img/b-10.jpg", "img/b-11.jpg"];
const info = ["Bl&#228;ttler Dafflon Architekten, Invitation&nbsp;Card (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)", 
"Bl&#228;ttler Dafflon Architekten, Invitation Card (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)",
"Baugenossenschaft Frohheim, Magazine 'Frohheim' (Illustration:&nbsp;&#169;Leander&nbsp;Eisenmann)", 
"UBS Real Estate Management, anfos/haus, Printed Matter",
"Princeton University Art Museum, Frank Gehry: 'On Line', Book Design", 
"Princeton University Art Museum, Frank Gehry: 'On Line', Book Design",
"Realgymnasium R&#228;mib&#252;hl Z&#252;rich, Printed Matters (Photography:&nbsp;&#169;Saskja&nbsp;Rosset)", 
"Realgmnasium R&#228;mib&#252;hl Z&#252;rich, Give-aways (T-Shirt)",
"FHNW, Lecture Series: “Very Much Dutch”, Poster", 
"UBS Real Estate Management, anfos/haus, Signage",
"Baugenossenschaft Frohheim, Riedgraben, Signage"]

window.onload = () => {
     const randomNum = Math.floor(Math.random() * myPix.length);
     document.body.style.backgroundImage = `url(${myPix[randomNum]})`;
     document.getElementById("info-display").innerHTML = info[randomNum];
}

targetElement.ontouchend = (e) => {
     e.preventDefault();
 };