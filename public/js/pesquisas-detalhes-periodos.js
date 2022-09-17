import {requestPesquisas} from "./requestPesquisa.js";

var pesquisa = document.getElementById("nome_pesquisa");
var listaPeriodos = document.getElementById("pesquisas_periodos_realizados");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("id")) {
  requestPesquisas((`https://servicodados.ibge.gov.br/api/v1/pesquisas/${urlParams.get("id")}`))
  .then((pesquisasAll) => {
    addPesquisasDetalhesPeriodos(pesquisasAll);
  });
}

function addPesquisasDetalhesPeriodos(data) {
  console.log(data)
  if (data.observacao){
    pesquisa.innerText += " "+data.observacao;
  } else {
    pesquisa.innerText += " "+data.nome;

  }
  for (let periodo of data.periodos) {
      console.log(periodo)
      const newElementList = document.createElement("li");
      const newElementListLink = document.createElement("a");    
      newElementListLink.innerText = periodo.periodo
      newElementListLink.href = `indicadores-do-periodo.html?id=${data.id}&periodo=${periodo.periodo}&pesquisa=${pesquisa.innerText}`;
      newElementList.appendChild(newElementListLink)
      listaPeriodos.appendChild(newElementList)
    }
}
