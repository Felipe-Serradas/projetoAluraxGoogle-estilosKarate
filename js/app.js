function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  if (campoPesquisa == "" || campoPesquisa == " ") {
    section.innerHTML = `
    <div class="item-resultado">
      <p>Nada foi encontrado. Insira alguma informação</p>
    </div>
    `;
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let nome = "";
  let descricao = "";

  for (let estilo of estilosKarate) {
    nome = estilo.nome.toLowerCase();
    descricao = estilo.descricao.toLowerCase();
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
            <div class="item-resultado">
                <h2>${estilo.nome}</h2>
                <p class="descricao-meta">${estilo.descricao}</p>
                <a href="${estilo.link}" target="_blank">Saiba mais</a>
            </div>
      `;
    }
  }

  if (!resultados) {
    resultados = `
    <div class="item-resultado">
      <p>Nada foi encontrado</p>           
    </div>
    `;
  }

  section.innerHTML = resultados;
}


document
  .getElementById("campo-pesquisa")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita o comportamento padrão do Enter
      document.getElementById("pesquisar").click(); // Aciona o botão
    }
  });
