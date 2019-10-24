"use strict";

var imagem = null;

function escondeMostra() {
    console.log("esconde/mostra");

    var visibilidade = getComputedStyle(imagem).getPropertyValue("visibility");

    console.log("Estilo atual: " + visibilidade);

    if(visibilidade === "hidden"){
        imagem.style.visibility = "visible";
    }
    else{
        imagem.style.visibility = "hidden";
    }
}

function esconde() {
    console.log("esconde");
    imagem.style.display = "none";
}

function mostra() {
    console.log("mostra");
    imagem.style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", function () {
    imagem = document.getElementsByTagName("img")[0];

    var botao = document.getElementById("botao");
    botao.addEventListener("mouseover", mostra);
})