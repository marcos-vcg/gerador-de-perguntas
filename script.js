// Função para gerar um numero aleatorio de 0 ao numero nao incluso
function randomMenorQue(numero) {
    let random = Math.random()
    // console.log(random);
    let intRandomUmDigito = Math.floor(random * numero)
    // console.log(intRandomUmDigito);
    return intRandomUmDigito
}


// Função para gerar a pergunta
function generate() {

    let formato = document.getElementById("formato").value
    // console.log("formato: ", formato);
    let categoria = document.getElementById("categoria").value
    // console.log("categoria: ", categoria);
    let responseTextArea = document.getElementById("response-box")


    if (formato == "random") {
        // console.log("Selecionando Formato Aleatório")
        formato = randomMenorQue(2) % 2 == 0 ? "Objetivas" : "Subjetivas"
        // console.log("Formato Aleatório: ", formato)
    }


    if (categoria == "random") {
        // console.log("Selecionando Categoria Aleatória")
        let indiceCategoriaAleatoria = randomMenorQue(categorias.length)
        // console.log(categorias.length)

        categoria = categorias[indiceCategoriaAleatoria]
        // console.log("Categoria Aleatória: ", categoria)
    }


    // let perguntaRandom = perguntas.filter(grupo => {
    //     if (grupo.categoria == categoria) {
    //         return grupo.perguntasSubjetivas
    //     }
    // })

    let response
    perguntas.forEach(grupo => {
        if (grupo.categoria == categoria) {
            let listaPerguntas = grupo[formato]
            // console.log(listaPerguntas.length)
            response = listaPerguntas[randomMenorQue(listaPerguntas.length)]
        }
    })
    // console.log("perguntaRandom: ", response)


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



// Json com as perguntas objetivas ou subjetivas de acordo com as categorias
var perguntas = [
    {
        "categoria": "Viagens",
        "Objetivas": [
            "Quais países você já visitou?",
            "Você prefere viagens de avião, carro ou trem?",
            "Qual foi a duração da sua viagem mais longa?",
            "Você já visitou algum Patrimônio Mundial da UNESCO?",
            "Quantos idiomas você fala durante suas viagens?",
            "Você já fez uma viagem de última hora?",
            "Qual é a melhor época do ano para visitar sua cidade natal?",
            "Você já viajou sozinho?",
            "Qual foi o lugar mais exótico que você visitou?",
            "Você já teve algum problema com vistos ou passaportes?",
            "Você já fez um cruzeiro?",
            "Qual é o seu meio de transporte favorito enquanto viaja?",
            "Você prefere hotéis ou aluguéis de temporada?",
            "Qual é o item mais importante na sua mala?",
            "Você já visitou todos os continentes?",
            "Qual é a sua companhia aérea favorita?",
            "Você já fez uma viagem de mochilão?",
            "Qual é a sua cidade favorita no mundo e por quê?",
            "Você já fez uma viagem temática?",
            "Qual é o seu próximo destino de viagem?"
        ],
        "Subjetivas": [
            "Qual viagem mudou mais a sua perspectiva de vida?",
            "O que você mais valoriza em uma viagem?",
            "Como você escolhe seus destinos de viagem?",
            "Qual é a sua melhor lembrança de viagem?",
            "O que você aprendeu sobre si mesmo enquanto viajava?",
            "Qual cultura você achou mais fascinante ao viajar?",
            "Como você descreveria sua viagem dos sonhos?",
            "O que você acha que torna uma viagem inesquecível?",
            "Qual destino você recomendaria a um amigo e por quê?",
            "Como você lida com o choque cultural quando viaja?",
            "Qual é a sua filosofia de viagem?",
            "Como você acha que viajar afeta as relações pessoais?",
            "Qual é a sua opinião sobre turismo sustentável?",
            "Como você acha que o turismo pode beneficiar uma comunidade local?",
            "Qual é a sua opinião sobre viagens espaciais?",
            "Como você acha que as viagens mudarão no futuro?",
            "Qual é a sua opinião sobre viagens solo versus viagens em grupo?",
            "O que você acha que é mais importante: o destino ou a jornada?",
            "Como você acha que viajar contribui para a educação?",
            "Se você pudesse viver em qualquer lugar do mundo, onde seria?"
        ]

    },

    {
        "categoria": "Música",
        "Objetivas": [
            "Quem é seu artista favorito atualmente?",
            "Qual foi o último show ao vivo que você assistiu?",
            "Você toca algum instrumento musical?",
            "Qual gênero musical você mais escuta?",
            "Você prefere música digital ou vinil?",
            "Quantas músicas você tem na sua playlist favorita?",
            "Você já conheceu algum músico famoso?",
            "Você canta ou tem alguma experiência com canto?",
            "Qual é a música mais tocada no seu reprodutor de música?",
            "Você já participou de um festival de música?",
            "Você já compôs sua própria música?",
            "Qual é a sua banda favorita?",
            "Você já fez aulas de música?",
            "Qual é a sua opinião sobre música ao vivo versus gravada?",
            "Você já fez parte de uma banda ou grupo musical?",
            "Qual é a sua trilha sonora de filme favorita?",
            "Você já usou música para melhorar seu humor?",
            "Qual é a sua opinião sobre a indústria da música atual?",
            "Você já fez karaoke? Qual é a sua música de karaoke favorita?",
            "Qual é a sua opinião sobre remixes de músicas clássicas?"
        ],
        "Subjetivas": [
            "Qual música sempre te faz sentir melhor?",
            "O que a música significa para você?",
            "Como você descobre novas músicas ou artistas?",
            "Qual é a sua primeira lembrança relacionada à música?",
            "Qual música ou artista influenciou mais a sua vida?",
            "O que você acha que conecta as pessoas à música?",
            "Qual é a sua letra de música favorita e por quê?",
            "Como você acha que a música impacta a sociedade?",
            "Qual show ao vivo superou suas expectativas?",
            "Se você pudesse ser um músico, que estilo você adotaria?",
            "Qual é a sua opinião sobre a música como forma de protesto?",
            "Como você acha que a música pode unir as pessoas?",
            "Qual é a sua opinião sobre a importância da música na educação?",
            "Como você acha que a música influencia a moda?",
            "Qual é a sua opinião sobre a relação entre música e tecnologia?",
            "Como você acha que a música pode ajudar em tempos difíceis?",
            "Qual é a sua opinião sobre a globalização da música?",
            "Como você acha que a música expressa emoções?",
            "Qual é a sua opinião sobre a censura na música?",
            "Se você pudesse escolher uma trilha sonora para sua vida, qual seria?"
        ]
    },

    {
        "categoria": "Filmes e Séries",
        "Objetivas": [
            "Qual foi o último filme que você assistiu?",
            "Você tem uma série de TV favorita?",
            "Quantos filmes você assiste por mês?",
            "Você prefere filmes de ação, comédia ou drama?",
            "Você já assistiu a mesma série mais de uma vez?",
            "Qual é o seu diretor de cinema favorito?",
            "Você segue a carreira de algum ator ou atriz em particular?",
            "Você já participou de um clube de cinema?",
            "Qual é o seu filme clássico favorito?",
            "Você prefere assistir filmes em casa ou no cinema?",
            "Você já fez parte de uma produção de filme ou série?",
            "Qual é o seu documentário favorito?",
            "Você já visitou locações de filmagens famosas?",
            "Qual é a sua opinião sobre filmes baseados em fatos reais?",
            "Você já fez uma maratona de filmes ou séries?",
            "Qual é a sua franquia de filmes favorita?",
            "Você já assistiu a um filme em um idioma que não entende?",
            "Qual é a sua opinião sobre críticas de cinema?",
            "Você já se vestiu como um personagem de filme ou série?",
            "Qual é a sua opinião sobre remakes e reboots?"
        ],
        "Subjetivas": [
            "Qual filme ou série teve um grande impacto em sua vida?",
            "O que você acha que faz uma série ser 'viciante'?",
            "Como você escolhe um novo filme ou série para assistir?",
            "Qual personagem de filme ou série você mais se identifica?",
            "O que você acha dos remakes de filmes clássicos?",
            "Qual é a melhor trilha sonora de filme na sua opinião?",
            "Como você acha que os filmes influenciam a sociedade?",
            "Qual é a sua opinião sobre filmes baseados em livros?",
            "Você prefere filmes com finais felizes ou realistas?",
            "Qual série você acha que merecia uma continuação?",
            "Como você acha que a representação em filmes e séries está evoluindo?",
            "Qual é a sua opinião sobre a diversidade na indústria cinematográfica?",
            "Como você acha que os filmes e séries podem educar as pessoas?",
            "Qual é a sua opinião sobre a censura em filmes e séries?",
            "Como você acha que a tecnologia está mudando a forma como assistimos a filmes e séries?",
            "Qual é a sua opinião sobre a representação de diferentes culturas em filmes e séries?",
            "Como você acha que os filmes e séries afetam as tendências da moda?",
            "Qual é a sua opinião sobre a adaptação de livros para filmes ou séries?",
            "Como você acha que os filmes e séries podem contribuir para o debate social?",
            "Se você pudesse criar uma série, sobre o que seria?"
        ]
    },

    {
        "categoria": "Livros",
        "Objetivas": [
            "Qual foi o último livro que você leu?",
            "Você prefere ficção ou não-ficção?",
            "Quantos livros você lê por ano?",
            "Você já leu algum livro mais de uma vez?",
            "Qual é o seu autor favorito?",
            "Você participa de algum clube do livro?",
            "Qual é o maior livro que você já leu?",
            "Você prefere e-books ou livros impressos?",
            "Você já escreveu alguma resenha de livro?",
            "Qual é o seu gênero literário favorito?",
            "Você já conheceu algum autor pessoalmente?",
            "Qual é o seu poema favorito?",
            "Você já escreveu alguma história ou livro?",
            "Qual é a sua opinião sobre bibliotecas digitais?",
            "Você já doou livros para alguém ou alguma instituição?",
            "Qual é a sua opinião sobre audiolivros?",
            "Você já participou de uma feira de livros?",
            "Qual é a sua opinião sobre a auto-publicação?",
            "Você já se inspirou em um livro para viajar?",
            "Qual é a sua opinião sobre a adaptação de livros para outros formatos?"
        ],
        "Subjetivas": [
            "Qual livro mudou sua maneira de pensar?",
            "O que você procura em uma boa história?",
            "Como você descobre novos livros para ler?",
            "Qual é a sua citação favorita de um livro?",
            "Que livro você recomendaria a alguém e por quê?",
            "Como você acha que a leitura molda uma pessoa?",
            "Qual personagem literário você gostaria de conhecer?",
            "O que você acha dos livros que se tornam séries ou filmes?",
            "Qual é a sua experiência mais memorável relacionada à leitura?",
            "Se você pudesse viver em um mundo de um livro, qual seria?",
            "Como você acha que os livros podem influenciar a cultura?",
            "Qual é a sua opinião sobre o papel dos livros na educação?",
            "Como você acha que a literatura pode promover a empatia?",
            "Qual é a sua opinião sobre a preservação de livros antigos?",
            "Como você acha que os livros podem ajudar no desenvolvimento pessoal?",
            "Qual é a sua opinião sobre a censura literária?",
            "Como você acha que os livros refletem a sociedade?",
            "Qual é a sua opinião sobre a importância da literatura infantil?",
            "Como você acha que os livros podem contribuir para a saúde mental?",
            "Se você pudesse escrever um livro, qual seria o tema central?"
        ]
    },

    {
        "categoria": "Esportes",
        "Objetivas": [
            "Qual é o seu esporte favorito para assistir?",
            "Você pratica algum esporte regularmente?",
            "Quem é o seu atleta favorito?",
            "Você já foi a um evento esportivo ao vivo?",
            "Quantas vezes por semana você se exercita?",
            "Você tem um time de esportes favorito?",
            "Qual foi o último evento esportivo que você assistiu na TV?",
            "Você prefere esportes individuais ou coletivos?",
            "Você já ganhou algum troféu ou medalha em esportes?",
            "Qual é o seu maior objetivo relacionado a esportes?",
            "Você já praticou esportes extremos?",
            "Qual é o seu recorde pessoal em algum esporte?",
            "Você segue algum campeonato esportivo internacional?",
            "Qual é a sua opinião sobre esportes eletrônicos?",
            "Você já fez parte de uma equipe esportiva?",
            "Qual é o seu exercício físico favorito?",
            "Você já sofreu alguma lesão praticando esporte?",
            "Qual é a sua opinião sobre o uso de suplementos esportivos?",
            "Você já participou de uma corrida ou maratona?",
            "Qual é a sua opinião sobre o doping no esporte?"
        ],
        "Subjetivas": [
            "O que os esportes representam para você?",
            "Como você se sente quando seu time ganha ou perde?",
            "O que você acha que faz um grande atleta?",
            "Qual é a sua memória mais preciosa relacionada a esportes?",
            "Como você acha que os esportes unem as pessoas?",
            "Qual é a sua opinião sobre o uso de tecnologia em esportes?",
            "Como você acha que os esportes influenciam os jovens?",
            "Qual momento esportivo você gostaria de ter presenciado?",
            "Você acha que os esportes são importantes na educação?",
            "Se você pudesse praticar qualquer esporte profissionalmente, qual seria?",
            "Como você acha que os esportes podem promover a saúde mental?",
            "Qual é a sua opinião sobre a inclusão nos esportes?",
            "Como você acha que os esportes podem ser usados para o desenvolvimento social?",
            "Qual é a sua opinião sobre a representação feminina nos esportes?",
            "Como você acha que os esportes podem ajudar no combate ao racismo?",
            "Qual é a sua opinião sobre a aposentadoria precoce no esporte?",
            "Como você acha que os esportes podem afetar a diplomacia internacional?",
            "Qual é a sua opinião sobre a pressão psicológica em atletas profissionais?",
            "Como você acha que os esportes podem contribuir para a igualdade de gênero?",
            "Se você pudesse mudar algo no mundo dos esportes, o que seria?"
        ]
    },

    {
        "categoria": "Culinária",
        "Objetivas": [
            "Qual é o seu prato favorito para cozinhar?",
            "Você segue alguma dieta específica?",
            "Quantas vezes por semana você cozinha em casa?",
            "Você já fez algum curso de culinária?",
            "Qual é a sua cozinha internacional favorita?",
            "Você prefere doce ou salgado?",
            "Qual é o ingrediente mais exótico que você já usou?",
            "Você já cozinhou para um grande grupo de pessoas?",
            "Qual é a sua receita de família favorita?",
            "Você já participou de algum concurso de culinária?",
            "Você já experimentou alguma dieta de moda?",
            "Qual é o seu utensílio de cozinha favorito?",
            "Você já teve uma experiência ruim ao experimentar um novo prato?",
            "Qual é a sua opinião sobre comida orgânica?",
            "Você já visitou algum país especificamente pela sua culinária?",
            "Qual é a sua opinião sobre fast food versus comida caseira?",
            "Você já plantou algum ingrediente que usou na cozinha?",
            "Qual é a sua opinião sobre dietas vegetarianas ou veganas?",
            "Você já preparou uma refeição inteiramente do zero?",
            "Qual é a sua opinião sobre a culinária molecular?"
        ],
        "Subjetivas": [
            "O que cozinhar significa para você?",
            "Como você descreveria sua filosofia de culinária?",
            "Qual é a sua experiência mais memorável na cozinha?",
            "Como você acha que a culinária conecta as pessoas?",
            "Qual é a sua opinião sobre comida de rua?",
            "Qual tendência culinária você acha mais interessante?",
            "Como você acha que a culinária reflete a cultura de um país?",
            "Qual é a sua opinião sobre dietas da moda?",
            "Qual é a sua comida conforto e por quê?",
            "Se você pudesse jantar com qualquer chef, quem seria?",
            "Como você acha que a culinária pode ser uma forma de arte?",
            "Qual é a sua opinião sobre o impacto ambiental da culinária?",
            "Como você acha que a culinária pode influenciar a saúde?",
            "Qual é a sua opinião sobre a importância da apresentação dos pratos?",
            "Como você acha que a culinária pode ser usada para preservar tradições?",
            "Qual é a sua opinião sobre o papel da culinária na hospitalidade?",
            "Como você acha que a culinária pode ser inclusiva para diferentes dietas?",
            "Qual é a sua opinião sobre o ensino de culinária nas escolas?",
            "Como você acha que a culinária pode ser um ato de cuidado?",
            "Se você pudesse criar um novo prato, quais sabores você combinaria?"
        ]
    },

    {
        "categoria": "Hobbies",
        "Objetivas": [
            "Qual é o seu hobby favorito atualmente?",
            "Você coleciona alguma coisa?",
            "Quanto tempo você dedica aos seus hobbies por semana?",
            "Você já transformou um hobby em um negócio?",
            "Qual é o hobby mais incomum que você já experimentou?",
            "Você tem algum hobby relacionado à natureza?",
            "Qual foi o último projeto de hobby que você completou?",
            "Você prefere hobbies que você pode fazer sozinho ou com outras pessoas?",
            "Você já ensinou seu hobby a alguém?",
            "Qual é o hobby que você gostaria de começar?",
            "Você já participou de uma competição relacionada ao seu hobby?",
            "Qual é o seu hobby mais relaxante?",
            "Você já viajou por causa de um hobby?",
            "Qual é o seu hobby mais caro?",
            "Você já restaurou algo como um hobby?",
            "Qual é o seu hobby mais criativo?",
            "Você já se apresentou em público com seu hobby?",
            "Qual é a sua opinião sobre hobbies digitais versus manuais?",
            "Você já fez amizades através de um hobby?",
            "Qual é a sua opinião sobre a importância dos hobbies para o bem-estar?"
        ],
        "Subjetivas": [
            "Por que você gosta do seu hobby?",
            "Como você descobriu seu hobby?",
            "O que seu hobby diz sobre você?",
            "Como seu hobby impacta seu bem-estar?",
            "Qual é a maior satisfação que você obtém do seu hobby?",
            "Como você acha que os hobbies enriquecem a vida das pessoas?",
            "Qual hobby você acha que todo mundo deveria tentar pelo menos uma vez?",
            "Como você equilibra seu tempo entre trabalho e hobbies?",
            "Qual é a sua maior conquista em seu hobby?",
            "Se dinheiro não fosse um problema, que hobby você gostaria de perseguir?",
            "Como você acha que os hobbies podem ajudar no desenvolvimento pessoal?",
            "Qual é a sua opinião sobre a comunidade em torno dos hobbies?",
            "Como você acha que os hobbies podem ser uma forma de expressão?",
            "Qual é a sua opinião sobre a importância dos hobbies na aposentadoria?",
            "Como você acha que os hobbies podem contribuir para a saúde mental?",
            "Qual é a sua opinião sobre a aprendizagem ao longo da vida através dos hobbies?",
            "Como você acha que os hobbies podem influenciar a criatividade?",
            "Qual é a sua opinião sobre a compartilhamento de hobbies nas redes sociais?",
            "Como você acha que os hobbies podem ser usados para o engajamento comunitário?",
            "Se você pudesse criar um novo hobby, o que seria?"
        ]
    },

    {
        "categoria": "Tecnologia",
        "Objetivas": [
            "Qual é o último gadget que você comprou?",
            "Você prefere Android ou iOS?",
            "Quantas horas por dia você passa em frente a telas?",
            "Você já programou ou criou um aplicativo?",
            "Qual é o seu software ou aplicativo favorito?",
            "Você acompanha alguma conferência de tecnologia?",
            "Qual é a sua opinião sobre inteligência artificial?",
            "Você usa tecnologia para se manter organizado?",
            "Qual inovação tecnológica você está mais ansioso para ver no futuro?",
            "Você já consertou um dispositivo eletrônico por conta própria?",
            "Você já construiu um computador?",
            "Qual é a sua opinião sobre carros autônomos?",
            "Você usa algum wearable tech (tecnologia vestível)?",
            "Qual é a sua opinião sobre a realidade virtual?",
            "Você já participou de um hackathon?",
            "Qual é a sua opinião sobre a segurança cibernética?",
            "Você já usou uma impressora 3D?",
            "Qual é a sua opinião sobre a mineração de criptomoedas?",
            "Você acha que a tecnologia está evoluindo muito rápido?",
            "Qual é a sua opinião sobre a tecnologia blockchain?"
        ],
        "Subjetivas": [
            "Como você acha que a tecnologia mudou sua vida?",
            "Qual é a sua opinião sobre a dependência da tecnologia?",
            "Como você se mantém atualizado com as novidades tecnológicas?",
            "Qual é a sua visão para o futuro da tecnologia?",
            "Como você acha que a tecnologia afeta as relações humanas?",
            "Qual é o seu maior desafio ao lidar com a tecnologia?",
            "O que você pensa sobre privacidade de dados na era digital?",
            "Como você acha que a tecnologia pode melhorar a educação?",
            "Qual é a sua opinião sobre jogos eletrônicos e realidade virtual?",
            "Se você pudesse inventar um gadget, como ele seria?",
            "Como você acha que a tecnologia pode ajudar no combate às mudanças climáticas?",
            "Qual é a sua opinião sobre o impacto da tecnologia no mercado de trabalho?",
            "Como você acha que a tecnologia pode contribuir para a saúde global?",
            "Qual é a sua opinião sobre a ética na inteligência artificial?",
            "Como você acha que a tecnologia pode promover a inclusão social?",
            "Qual é a sua opinião sobre a obsolescência programada?",
            "Como você acha que a tecnologia pode ser usada para preservar o meio ambiente?",
            "Qual é a sua opinião sobre a relação entre tecnologia e arte?",
            "Como você acha que a tecnologia pode influenciar a governança global?",
            "Se você pudesse resolver um problema global com a tecnologia, qual seria?"
        ]
    },

    {
        "categoria": "Eventos Atuais",
        "Objetivas": [
            "Qual é a principal notícia de hoje?",
            "Você segue algum jornal ou canal de notícias específico?",
            "Qual é a sua opinião sobre a cobertura da mídia no seu país?",
            "Você já participou de algum evento político ou social?",
            "Qual é o tópico mais debatido atualmente na sua comunidade?",
            "Você acha que as redes sociais são uma fonte confiável de notícias?",
            "Como você acha que os eventos atuais vão afetar o futuro?",
            "Você já mudou sua opinião sobre um assunto devido a novas informações?",
            "Qual é o seu ponto de vista sobre a economia global atual?",
            "Você acredita que as notícias são imparciais?",
            "Você já foi impactado diretamente por um evento noticiado?",
            "Você já participou de uma manifestação ou protesto?",
            "Qual é a sua opinião sobre as políticas ambientais atuais?",
            "Você já votou em uma eleição?",
            "Qual é a sua opinião sobre a diplomacia internacional?",
            "Você acha que seu país está bem representado na mídia global?",
            "Qual é a sua opinião sobre a liberdade de imprensa?",
            "Você já fez trabalho voluntário em resposta a um evento atual?",
            "Qual é a sua opinião sobre a influência das celebridades em eventos atuais?",
            "Você acha que os eventos atuais estão sendo bem gerenciados pelas autoridades?"
        ],
        "Subjetivas": [
            "Como você se sente sobre o estado atual do mundo?",
            "Qual notícia recente mais te impactou e por quê?",
            "O que você acha que poderia melhorar na forma como as notícias são apresentadas?",
            "Como você acha que os eventos atuais influenciam a cultura popular?",
            "Você acha que as pessoas estão mais politizadas hoje em dia?",
            "Qual é a sua opinião sobre o ativismo nas redes sociais?",
            "Como você acha que os eventos atuais afetam sua vida pessoal?",
            "Você acha que a juventude está mais envolvida com questões sociais?",
            "Qual causa social você acha mais urgente e por quê?",
            "Como você acha que a sociedade pode resolver conflitos globais?",
            "Como você acha que os eventos atuais podem ser vistos pela história?",
            "Qual é a sua opinião sobre a polarização política?",
            "Como você acha que os eventos atuais afetam a educação?",
            "Qual é a sua opinião sobre a cobertura de eventos atuais nas redes sociais?",
            "Como você acha que os eventos atuais podem influenciar as artes?",
            "Qual é a sua opinião sobre a resposta global a crises humanitárias?",
            "Como você acha que os eventos atuais podem afetar as futuras gerações?",
            "Qual é a sua opinião sobre a participação cidadã em eventos atuais?",
            "Como você acha que os eventos atuais podem ser usados para promover a paz?",
            "Se você pudesse mudar um aspecto dos eventos atuais, o que seria?"
        ]
    },

    {
        "categoria": "Cultura",
        "Objetivas": [
            "Qual é a festa tradicional mais importante da sua região?",
            "Você já visitou algum museu recentemente?",
            "Quantos idiomas você fala?",
            "Você pratica alguma dança ou arte tradicional?",
            "Qual é o seu feriado favorito e como você o celebra?",
            "Você já participou de um casamento com tradições diferentes das suas?",
            "Qual é o prato típico da sua região?",
            "Você já leu algum livro sobre antropologia ou etnografia?",
            "Qual é a importância da preservação cultural na sua opinião?",
            "Você já ajudou a organizar algum evento cultural?",
            "Você já aprendeu a tocar um instrumento musical tradicional?",
            "Qual é a sua opinião sobre a globalização da cultura?",
            "Você já participou de um festival cultural?",
            "Qual é a sua opinião sobre o turismo cultural?",
            "Você já fez parte de um grupo cultural ou folclórico?",
            "Qual é a sua opinião sobre a arte de rua?",
            "Você já praticou alguma arte marcial tradicional?",
            "Qual é a sua opinião sobre a influência da cultura pop?",
            "Você já fez uma tatuagem com significado cultural?",
            "Qual é a sua opinião sobre a preservação de línguas indígenas?"
        ],
        "Subjetivas": [
            "O que a cultura significa para você?",
            "Como você acha que a cultura influencia a identidade de uma pessoa?",
            "Qual aspecto da sua cultura você mais se orgulha?",
            "Como você acha que as tradições são passadas de geração em geração?",
            "Qual é a sua opinião sobre a globalização e a cultura?",
            "Como você acha que a arte reflete a sociedade?",
            "Qual tradição cultural você acha que deveria ser revivida?",
            "Como você acha que a cultura afeta a linguagem?",
            "Qual é a sua opinião sobre o turismo cultural?",
            "Se você pudesse imergir em outra cultura por um dia, qual seria?",
            "Como você acha que a cultura pode promover a compreensão entre diferentes povos?",
            "Qual é a sua opinião sobre a representação cultural na mídia?",
            "Como você acha que a cultura pode ser usada para promover a paz?",
            "Qual é a sua opinião sobre a comercialização de elementos culturais?",
            "Como você acha que a cultura pode influenciar a política?",
            "Qual é a sua opinião sobre a preservação de culturas indígenas?",
            "Como você acha que a cultura pode contribuir para a educação?",
            "Qual é a sua opinião sobre a influência da cultura na moda?",
            "Como você acha que a cultura pode ser preservada na era digital?",
            "Se você pudesse mudar um aspecto da sua cultura, o que seria? ",
        ]
    },

]

// console.log("perguntas: ", perguntas)
let categorias = perguntas.map(teste => teste.categoria)
// console.log("categorias: ", categorias)

var select = document.getElementById("categoria");

select.options[select.options.length] = new Option("Aleatória", "random")

categorias.forEach(categoria => {
    select.options[select.options.length] = new Option(categoria, categoria)
})

// for (index in categorias) {
//     select.options[select.options.length] = new Option(categorias[index], categorias[index]);
// }
