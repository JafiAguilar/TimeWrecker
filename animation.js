"use strict"
const ul = document.querySelector("ul");

//BUENA FORMA

function frames (){
    const animation = ul.animate([
        //keyframes
        {transform: "TranslateY(0px)"},
        {transform: "TranslateY(-100px)"}
    ],{
       //options
       easing: "linear",
       iterations: 1,
       duration: 400 //milisegundos 
    });

    return animation.finished;
}

function displace(){
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })
}   

setInterval(() => {
    displace();
}, 1000);