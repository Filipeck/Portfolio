var formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){

    //Bloqueia o refresh da página
    e.preventDefault()
    // Url da pesquisa dos Pokémons
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    //Valor do input Name
    let nome = document.getElementById('name');

    //Concatena a url com o inputname
    urlForm = urlForm + this.name.value;

    //Transforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()

    //ID Content
    let resposta = document.getElementById('content');

    //ID ImgPokemon
    let imagem = document.getElementById('imgPokemon');

    //Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data){
            console.log(data)
            html ='Nome: ' + maiuscula(data.name) +'<br>'
            html = html + 'Tipo: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html;

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
            console.log(err)
        })

    

});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}