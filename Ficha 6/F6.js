"use strict";

const API_KEY = "896f88b8";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

var clone_div_filme = null;

function pesquisar(){
    var search_keyword = $("#input-pesquisa").val();

    var search_url = API_URL + "s=" + search_keyword;
    // http://www.omdbapi.com/?apikey=896f88b8&s=batman

    $(".lista-filmes").html("");

    $.ajax({
        method: "GET",
        url: search_url
    }).done(function (msg) {
        if(msg.Response === "True"){
            var results = msg.Search // Array de resultados
            
            results.forEach(function (result) {

                var result_html = clone_div_filme.clone();

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

                $(".lista-filmes").append(result_html);
            });
        }
        else{
            console.log("Error: no response.");
        }
    });
}

$(function () {
    // On Document Load
    var template = $(".filme");
    clone_div_filme = template.clone();
    template.hide();
});