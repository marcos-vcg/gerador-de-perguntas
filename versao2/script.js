// Função para gerar um numero aleatorio de 0 a 9
function randomUmDigito() {
    let random = Math.random()
    // console.log(random);
    let intRandomUmDigito = Math.floor(random * 10)
    // console.log(intRandomUmDigito);
    return intRandomUmDigito
}


// Função para gerar a pergunta
function generate() {

    let formato = document.getElementById("formato").value
    console.log("formato: ", formato);
    let categoria = document.getElementById("categoria").value
    console.log("categoria: ", categoria);
    let responseTextArea = document.getElementById("response-box")


    if (formato == "random") {
        console.log("Selecionando Formato Aleatório")
        formato = randomUmDigito() % 2 == 0 ? "objetivas" : "subjetivas"
        console.log("Formato Aleatório: ", formato)
    }


    if (categoria == "random") {
        console.log("Selecionando Categoria Aleatória")
        let indiceCategoriaAleatoria = randomUmDigito()

        categoria = categorias[indiceCategoriaAleatoria]
        console.log("Categoria Aleatória: ", categoria)
    }



    let perguntasDaCategoriaEscolhida = perguntas[categoria]
    console.log("perguntasDaCategoriaEscolhida: ", perguntasDaCategoriaEscolhida)

    let perguntasNoFormatoEscolhido = perguntasDaCategoriaEscolhida[formato]
    console.log("perguntasNoFormatoEscolhido: ", perguntasNoFormatoEscolhido)

    let indicePerguntaAleatoria = randomUmDigito()
    console.log("indicePerguntaAleatoria: ", indicePerguntaAleatoria)

    let perguntaAleatoriaDaCategoriaEscolhidaNoFormatoEscolhido = perguntasNoFormatoEscolhido[indicePerguntaAleatoria]
    console.log("perguntaAleatoriaDaCategoriaEscolhidaNoFormatoEscolhido: ", perguntaAleatoriaDaCategoriaEscolhidaNoFormatoEscolhido);

    let response = perguntaAleatoriaDaCategoriaEscolhidaNoFormatoEscolhido


    try {
        responseTextArea.innerText = response
        console.log('Ok, response generated');
    } catch (err) {
        console.log('Oops, unable to generate');
    }
}


// Função para copiar a resposta para a area de transferência
function copy() {
    let responseTextArea = document.getElementById("response-box")

    responseTextArea.select();

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
        let responseText = responseTextArea.innerHTML
        window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", responseText);
    }
}




let categorias = ["comidas", "viagens", 'familia', 'amigos', 'pets', 'natureza', 'exercicios', 'meditacao', "hobbies", "livros", "filmes"]



let perguntas =
{
    "comidas": {
        "objetivas": [
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
            "O arroz vai por cima ou por baixo do feijão?",
        ],
        "subjetivas": [
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
            "O arroz fica por cima ou por baixo do feijão?",
        ],
    },

    "viagens": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "familia": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "amigos": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "pets": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "natureza": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "exercicios": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "meditacao": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "hobbies": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

    "livros": {
        "objetivas": ["O arroz vai por cima ou por baixo do feijão?",],
        "subjetivas": ["O arroz fica por cima ou por baixo do feijão?",],
    },

}