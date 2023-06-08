let box = document.querySelector('.box');
 box.style.gridTemplateColumns = "repeat(10, 1fr)";
 box.style.gridTemplateRows = "repeat(7, 1fr)";


 for(let i = 0; i <=70; i++){
    let square= document.createElement("div");
    square.style.backgroundColor="#997800";
    square.className="yes";
    box.insertAdjacentElement("beforeend",square)
 }

 let box1 = document.querySelector('.box1');
 box1.style.gridTemplateColumns = "repeat(10, 1fr)";
 box1.style.gridTemplateRows = "repeat(7, 1fr)";

 for(let i = 0; i <=70; i++){
    let square1= document.createElement("div");
    square1.style.backgroundColor="#997800";
    square1.className="yes";
    box1.insertAdjacentElement("beforeend",square1)
 }