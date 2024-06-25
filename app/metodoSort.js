const btnOrdenarPorPreco = document.querySelector("#btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarPorPreco);

function ordenarPorPreco(){
	const livrosOrdenados = livros.sort( (a, b) => {
		// a - b ordem crescente
		return a.preco - b.preco;
	})


  // Usa método FOREACH
  exibirOsLivrosNaTela(livrosOrdenados);
}