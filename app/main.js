let livros = [];

const endpointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();
  // console.log(livros);
  // console.table(livros);

  // Usa método MAP
  let livrosComDesconto = aplicarDesconto(livros);

  // Usa método FOREACH
  exibirOsLivrosNaTela(livrosComDesconto);
}


