const myPix = [
     "img/b-01.jpg", 
     "img/b-02.jpg", 
     "img/b-03.jpg", 
     "img/b-04.jpg", 
     "img/b-05.jpg", 
     "img/b-06.jpg", 
     "img/b-07.jpg", 
     "img/b-08.jpg", 
     "img/b-09.jpg", 
     "img/b-10.jpg", 
     "img/b-11.jpg", 
     "img/b-12.jpg", 
     "img/b-13.jpg"];
 
 const info = [
     "Bl&#228;ttler Dafflon Architekten, (Photography: &#169;Saskja Rosset)", 
     "Bl&#228;ttler Dafflon Architekten, (Photography: &#169;Saskja Rosset)",
     "Baugenossenschaft Frohheim, Magazine 'Frohheim' (Illustration:&nbsp;&#169;Leander&nbsp;Eisenmann)", 
     "UBS Real Estate Management, anfos/haus",
     "Princeton University Art Museum, Frank Gehry: 'On Line'", 
     "Princeton University Art Museum, Frank Gehry: 'On Line'",
     "Realgymnasium R&#228;mib&#252;hl Z&#252;rich (Photography: &#169;Saskja Rosset)", 
     "Realgymnasium R&#228;mib&#252;hl Z&#252;rich (T-Shirt)",
     "FHNW, Lecture Series: “Very Much Dutch”", 
     "UBS Real Estate Management, anfos/haus",
     "Baugenossenschaft Frohheim, Riedgraben (Photography: &#169;Saskja Rosset)", 
     "Collegium Novum Z&#252;rich",
     "Collegium Novum Z&#252;rich"];
 
 const cat = [ "Invitation Card",
     "Invitation Card",+
     "Art Direction + Editors + Graphic Design",
     "Printed Matter + Signage",
     "Book Design",
     "Book Design",
     "Printed Matters",
     "Give-aways",
     "Poster",
     "Signage",
     "Signage",
     "Identity + Printed Matter + Website",
     "Identity + Printed Matter + Website"];

window.onclick = () => {
     const randomNum = Math.floor(Math.random() * myPix.length);
     document.body.style.backgroundImage = `url(${myPix[randomNum]})`;
     document.getElementById("info-display").innerHTML = info[randomNum];
     document.getElementById("category").innerHTML = cat[randomNum];
}

targetElement.ontouchend = (e) => {
     e.preventDefault();
 };