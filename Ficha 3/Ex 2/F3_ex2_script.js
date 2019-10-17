"use strict";

var nome = prompt("Qual é o seu nome?", "Nome");

if (nome == null) {
    alert("Não tem nome?!");
}
else {
    alert("Olá " + nome + ", seja bem-vindo.");
}

