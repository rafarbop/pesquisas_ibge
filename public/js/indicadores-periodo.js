import {requestPesquisas} from "/pesquisas_ibge/public/js/requestPesquisa.js";

var pesquisa = document.getElementById("nome_e_periodo_pesquisa");
var listaIndicadoresPeriodo = document.getElementById("indicadores_periodo");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("id") && urlParams.has("periodo")) {
    requestPesquisas((`https://servicodados.ibge.gov.br/api/v1/pesquisas/${urlParams.get("id")}/periodos/${urlParams.get("periodo")}/indicadores`))
  .then((pesquisasAll) => {
    addIndicadoresPesquisasPeriodo(pesquisasAll);
  });

}

function addIndicadoresPesquisasPeriodo(data) {
  console.log(data)
  pesquisa.innerText += " "+ urlParams.get("pesquisa") +" - Periodo "+urlParams.get("periodo");
  for (let indicador of data) {
      console.log(indicador)
      const newElementList = document.createElement("li");
      const newElementListLink = document.createElement("a");    
      newElementListLink.innerHTML = indicador.indicador
    //   newElementListLink.href = ``;
      newElementList.appendChild(newElementListLink)
      newElementList.innerHTML += "<br>"+ JSON.stringify(indicador.children)
      listaIndicadoresPeriodo.appendChild(newElementList)
    }
}
