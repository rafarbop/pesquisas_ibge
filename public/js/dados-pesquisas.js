import {requestPesquisas} from "/pesquisas_ibge/public/js/requestPesquisa.js";

var listaPesquisas = document.getElementById("pesquisas_realizadas");
// Fazendo um request e consultado as pesquisas pre selecionadas
requestPesquisas(("https://servicodados.ibge.gov.br/api/v1/pesquisas/"))
    .then((pesquisasAll) => {
        addPesquisasAllList(pesquisasAll);
});

function addPesquisasAllList(data) {
  for (let pesquisa of data) {
    const newElementList = document.createElement("li");
    const newElementListLink = document.createElement("a");
    if (pesquisa.observacao) {
      newElementListLink.innerText = pesquisa.observacao;
      newElementList.setAttribute("data-presisa_nome", pesquisa.observacao);
    } else {
      newElementListLink.innerText = pesquisa.nome;
      newElementList.setAttribute("data-presisa_nome", pesquisa.nome);
    }
    newElementList.setAttribute("data-presisa_id", pesquisa.id);
    newElementListLink.href = `pesquisas-periodos.html?id=${pesquisa.id}`;
    newElementList.appendChild(newElementListLink);
    console.log(newElementList);

    listaPesquisas.appendChild(newElementList);
  }
}
