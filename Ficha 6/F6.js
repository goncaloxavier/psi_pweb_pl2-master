"use strict";

const API_KEY = "896f88b8";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

var search_url = API_URL + "s=" + "batman";
// http://www.omdbapi.com/?apikey=896f88b8&s=batman

$.ajax({
    method: "GET",
    url: search_url
}).done(function (msg) {
    if(msg.Response === "True"){
        var results = msg.Search // Array de resultados

        var i = 0; // Primeiro resultado

        var results_html = $(".filme");

        for(i = 0; i < results_html.length; i++){
            if(i >= results_html.length){
                break;
            }
            var result = results[i]; // Resultado pedido API
            var result_html = results_html[i];

            var titulo = result.Title;
            var ano = result.Year;
            var tipo = result.Type;
            var poster = result.Poster;

            var titulo_html = $(".titulo", result_html);
            var ano_html = $(".ano", result_html);
            var tipo_html = $(".tipo", result_html);
            var poster_html = $(".poster", result_html);

            titulo_html.text(titulo);
            ano_html.text(ano);
            tipo_html.text(tipo);
            poster_html.attr("src", poster);

            console.log("Title: " + titulo);
            console.log("Ano: " + ano);
            console.log("Tipo: " + tipo);
            console.log("Poster: " + poster);
        }
    }
    else{
        console.log("Error: no response.");
    }
});