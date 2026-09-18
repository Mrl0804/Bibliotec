const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//* Configuração da paginação

//define quantos livros serão mostrados em cada página
const livrosPorPagina = 4;

//guarda qual página está sendo exibida, começando na 1
let paginaAtual = 1;


//* Calculando o total de páginas
//*math.ceil() -> arredonda o resultado para cima
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

//* Função responsavel por mostrar a página (atualizar os elementos)

function mostrarPagina() {
    
    // Descobre o indice do primeiro livro que deve aparecer

    const inicio = (paginaAtual - 1) * livrosPorPagina;

    // Descobre até os livros devem ser exibidos

    //pagina 1: inicio 0 -> fim = 0 + 4 = 4
    //pagina 2: inicio 4 -> fim = 4 + 4 = 8
    const fim = inicio + livrosPorPagina;

    // Percoore toda a lista de livros encontrados no HTML
    //"livro" representa o elemento atual
    //"posição" representa a posição desse livro na lista
    livros.forEach((livro, posicao) => {

        //inicio na pagina 1 = 0
        //fim = 4

        //verifica se o indice/posicao do livro esta dentro do intervalo da pagina atual.
        if (posicao >= inicio && posicao < fim) {
            //se estiber dentro do intervalo mostra o livro
            livro.style.display = "grid";
        }
        else {
            //se nao estiver, esconde o livro
            livro.style.display = "none";
        }
    })

    // Atualiza no HTML o numero da pagina atual
    numeroPagina.textContent = paginaAtual;

    // Inicialmente, consideramos "fim" como a posição do ultimo livro mostrado
    let ultimoLivro = fim;

    // Se o valor ultrapassar a quantidade total de livros, usamos a quantidade total
    if(ultimoLivro > livros.length) {
        ultimoLivro = livros.length
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`;
};

//! Evento de click no botão de proxima de pagina

botaoProxima.addEventListener("click", () => {

    // Só permite avançar se ainda existir uma proxima página
    if(paginaAtual < totalPaginas) {
        
        // Avança uma pagina
        // paginaAtual = paginaAtual + 1
        paginaAtual++;

        // Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//? Evento de click no botao da pagina anterior

botaoAnterior.addEventListener("click", () => {

    // Só permite voltar se nao estivermos na primeira pagina
    if(paginaAtual > 1) {

        // Voltamos uma pagina
        paginaAtual--;

        // Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})


// Quando a pagina carregar, precisamos executar a função de mostar pagina uma vez para esconder os livros que não pertencem a primeira pagina
mostrarPagina();

