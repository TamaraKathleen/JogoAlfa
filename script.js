nacoes = [{
    "id": 1,
    "nacao": "Hobbit",
    "casa": "O Condado",
    "descricao": "Os  hobbits pés-peludos são o tipo mais comum de hobbit. São morenos, preferem planícies e regiões banhadas por rios. Os cascalvas tem a pele e o cabelo mais claros, são mais altos e mais esguios que os outros tipos de hobbit, preferem bosques e florestas para morar além de serem descendentes de elfos. Outros hobbits dizem que estes têm 'sangue de fada', por conta de sua ascendência. Os grados são tipos de hobbit mais robustos e frequentemente cultivam barbas. São mais próximos aos  anões,  e  Sméagol  costumava  ser  um  cascalva  antes  de  ser  corrompido  pelo anel",
    "personagens-saga": ["Bilbo  Bolseiro", "Samwise  Gamgee", "Frodo Bolseiro", "Peregrin      Tûk", "Rosinha      Villa"],
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bilbo_Bols%C3%B3n.png/227px-Bilbo_Bols%C3%B3n.png"
}, { "id": 6, "nacao": "Cavaleiro de Rohan", "casa": "Abismo de Helm", "descricao": "Durante a XIII século de Terceira Idade (TA), os governantes de Gondor formaram uma aliança estreita com os habitantes do território do norte deRhovanion, um pai de três pessoas Casas do Edain da Primeira Era. Estes homens foram dizimados pela  Grande  Peste  de  1636  TA,  e  ainda  mais  pelas  invasões  dos  carrinhos  de Pessoas-de-no final do XX século. Após essas invasões, alguns desses homens, liderados por um certo Frumgar, migraram para o vale superior do Anduin em 1977 TA. No local, eles entraram em conflito com os Anões sobre o compartilhamento do tesouro do dragão Scatha, morto por Fram, filho de Frumgar. Esses homens, que tomaram o nome de Éothéod, viveram por vários séculos ao redor das nascentes do Anduin, mas se tornaram cada vez mais numerosos e se sentiam confinados em suas terras.  Apesar  do  afastamento,  eles  mantiveram  laços  com  Gondor,  e  quando  o Administrador Cirion se viu atacado por hordas de Orientais e Orcs, em 2510 AT, ele chamou Eorl, o Jovem, o novo Senhor dos Éothéod. Ele chegou inesperadamente e  venceu  a  batalha  decisiva  dos  Campos  de  Celebrant.", "personagens-saga": ["Théoden", "Théodred", "Deorwine"], "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cavalier-rohan.jpg/220px-Cavalier-rohan.jpg" }, ]

var conteudo = "";
for (let i = 0; i < nacoes.length; i++) {

    conteudo += "<section>";
    conteudo += "<div class='divJson'>";
    conteudo += "<h4>Nação: " + nacoes[i].nacao + "</h4>";
    conteudo += "<h4>Casa: " + nacoes[i].casa + "</h4>";
    conteudo += "<p>" + nacoes[i].descricao + "</p>";
    conteudo += "<p>Personagens: " +nacoes[i]["personagens-saga"] + "</p>";
    conteudo += `<img src='${nacoes[i].imagem}'><img>`;
    conteudo += "</div>";
    conteudo += "</section>"
}
var elemento = document.getElementById('nacoes');
elemento.innerHTML = conteudo;