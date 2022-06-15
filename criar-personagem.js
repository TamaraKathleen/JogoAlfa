var index = 0;
var criarPersonagem = document.getElementById('criarPersonagem');

function adicionarJogador() {

    if (index < 7) {
        criarPersonagem.classList.remove('aparecer');
        var clone = document.getElementById('criar-personagem').cloneNode(true);
        criarPersonagem.append(clone);

        var camposClonados = clone.querySelectorAll("imput label div h1");
        for (i = 0; i < camposClonados.length; i++) {
            camposClonados[i].value = '';
        }
        index++
    } else {
        console.log("Limite máximo é de 8 jogadores")
    }
}
