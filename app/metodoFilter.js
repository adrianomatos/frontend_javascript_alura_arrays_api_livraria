// ASSIM MONITORANDO CADA BOTÃO DEIXA O CÓDIGO FEIO
// const btnFiltrarLivrosFront = document.getElementById("btnFiltrarLivrosFront");
// btnFiltrarLivrosFront.addEventListener("click", filtrarLivros("fron-end"));
const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);
  // console.table(livrosFiltrados);

  exibirOsLivrosNaTela(livrosFiltrados); // Usa método FOREACH

  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    // console.log(valorTotal);
    exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal);
  }
}

function filtrarPorDisponibilidade() {
  // exibirValorTotalDeLivrosDisponiveisNaTela();
  return livros.filter((livro) => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
			<p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
		</div>`;
}
