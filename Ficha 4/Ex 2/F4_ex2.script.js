"use strict";

var imagem = null;

function escondeMostra() {
    console.log("esconde/mostra");

    /*var visibilidade = getComputedStyle(imagem).getPropertyValue("visibility");

    console.log("Estilo atual: " + visibilidade);

    if(visibilidade === "hidden"){
        imagem.style.visibility = "visible";
    }
    else{
        imagem.style.visibility = "hidden";
    }*/

    var visibilidade = imagem.css("visibility");

    if(visibilidade === "visible"){
        imagem.css("visibility", "hidden");
    }
    else{
        imagem.css("visibility", "visible");
    }
}

function esconde() {
    console.log("esconde");
    //imagem.style.display = "none";
    //imagem.css("display", "none");
    imagem.hide();
}

function mostra() {
    console.log("mostra");
    //imagem.style.display = "inline-block";
    //imagem.css("display", "inline-block");
    imagem.show();
}

/*document.addEventListener("DOMContentLoaded", function () {
    imagem = document.getElementsByTagName("img")[0];

    var botao = document.getElementById("botao");
    botao.addEventListener("mouseover", mostra);
})*/

$(document).ready(function () {
    imagem = $("img");
    $("#botao").mouseover(mostra());
});