// Função para gerar a pergunta
function randomUmDigito() {
    var random = Math.random()
    // console.log(random);
    var intRandomUmDigito = Math.floor(random * 10)
    // console.log(intRandomUmDigito);
    return intRandomUmDigito
}

function generate() {

    var responseTextArea = document.getElementById("response-box")

    var formalidade = document.getElementById("formalidade").value
    console.log(formalidade);
    var categoria = document.getElementById("categoria").value
    console.log(categoria);
    // var acao = document.getElementById("acao").value
    // var contexto = document.getElementById("contexto").value
    // var intencao = document.getElementById("intencao").value
    // var formato = document.getElementById("formato").value

    if (categoria == 0) {
        var indiceCategoriaAleatoria = randomUmDigito()
        console.log("indiceCategoriaAleatoria: ", indiceCategoriaAleatoria)
        categoria = categorias[indiceCategoriaAleatoria]
        console.log(categoria)
    }



    var perguntasDaCategoriaEscolhida = perguntas[categoria]

    var indicePerguntaAleatoria = randomUmDigito()
    console.log("indicePerguntaAleatoria: ", indicePerguntaAleatoria)

    // var perguntaAleatoriaDaCategoriaEscolhida = perguntasDaCategoriaEscolhida[indicePerguntaAleatoria]?.formalidades

    var perguntaAleatoriaDaCategoriaEscolhida = perguntasDaCategoriaEscolhida[indicePerguntaAleatoria]

    // var perguntaAleatoriaDaCategoriaEscolhida = categorias[categoria][1]?.formalidades
    // console.log(perguntaAleatoriaDaCategoriaEscolhida);
    var perguntaDaFormalidadeEscolhida = perguntaAleatoriaDaCategoriaEscolhida[formalidade]
    // console.log(perguntaDaFormalidadeEscolhida);
    let response = perguntaDaFormalidadeEscolhida
    // console.log(response);

    // prompt.value = "sdsds"
    // prompt.innerHTML = "sdsds"
    // document.getElementById('prompt').innerText = "teste";

    try {
        responseTextArea.innerText = response
        console.log('Ok, response generated');
    } catch (err) {
        console.log('Oops, unable to generate');
    }

}


// Função para copiar a resposta para a area de transferência
function copy() {
    var responseTextArea = document.getElementById("response-box")

    responseTextArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
        var responseText = responseTextArea.innerHTML
        window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", responseText);
    }
}



// var perguntas = {
//     "categoria": 
//         {
//             "comidas": [
//                 {
//                     "formalidades": {
//                         "informal": "O arroz vai por cima ou por baixo do feijão?",
//                         "neutra": "O arroz fica por cima ou por baixo do feijão?",
//                         "formal": "O arroz deve ficar por cima ou por baixo do feijão?",
//                     },
//                 },
//                 {
//                     "formalidades": {
//                         "informal": "Temaki frito é coxinha?",
//                         "neutra": "O Temaki frito é uma coxinha?",
//                         "formal": "O Temaki frito pode ser considerado uma coxinha de frango?",
//                     },
//                 }
//         ],
//         "viagens": { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//         'familia': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//         'amigos': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//         'pets': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//         'natureza': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//         'exercícios': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//         'meditação': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//         },
// }
var categorias = ["comidas", "viagens", 'familia', 'amigos', 'pets', 'natureza', 'exercicios', 'meditacao', "hobbies", "livros", "filmes"]
var perguntas =
{
    "comidas": [
        {
            "informal": "O arroz vai por cima ou por baixo do feijão?",
            "neutra": "O arroz fica por cima ou por baixo do feijão?",
            "formal": "O arroz deve ficar por cima ou por baixo do feijão?",
        },
        {
            "informal": "Temaki frito é coxinha?",
            "neutra": "O Temaki frito é uma coxinha?",
            "formal": "O Temaki frito pode ser considerado uma coxinha de frango?",
        },
                {
            "informal": "Temaki frito é coxinha?",
            "neutra": "O Temaki frito é uma coxinha?",
            "formal": "O Temaki frito pode ser considerado uma coxinha de frango?",
        },
    ],

    "viagens": [
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
    ],

    "familia": [
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
    ],

    "amigos": [
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
    ],

    "pets": [
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
    ],

    "natureza": [
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
    ],

    "exercicios": [
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
    ],

    "meditacao": [
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
        {
            "informal": "Qual viagem que você nunca vai esquecer?",
            "neutra": "Qual viagem que você nunca vai esquecer?",
            "formal": "Qual viagem que você nunca vai esquecer?",
        },
    ],
}

// var perguntas =
// {
//     "comidas": [
//         {
//             "formalidades": {
//                 "informal": "O arroz vai por cima ou por baixo do feijão?",
//                 "neutra": "O arroz fica por cima ou por baixo do feijão?",
//                 "formal": "O arroz deve ficar por cima ou por baixo do feijão?",
//             },
//         },
//         {
//             "formalidades": {
//                 "informal": "Temaki frito é coxinha?",
//                 "neutra": "O Temaki frito é uma coxinha?",
//                 "formal": "O Temaki frito pode ser considerado uma coxinha de frango?",
//             },
//         }
//     ],
//     "viagens": { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//     'familia': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//     'amigos': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//     'pets': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//     'natureza': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//     'exercícios': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
//     'meditação': { "formalidade": "Qual viagem que você nunca vai esquecer?" },
// }