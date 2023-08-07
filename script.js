

let Por = 0;
let currentQuestion = null;
const btnA = document.querySelector("#A");
const Start = document.querySelector("#Start");
const btnB = document.querySelector("#B");
const Porcenta = document.querySelector("#Num_AMOR");
const Btns = document.querySelector(".bts");
const Foo = document.querySelector(".footer");

const task = document.querySelector("#Perguntas"); 
var cond = Boolean;
var HearInteiro = "coracao.png";
var HearPartido = "coracaopartido.png";

var Quests;







const questions = [
    { Pergunta: "Você já esteve apaixonado(a)?", Pontuação: 10 },
    { Pergunta: "Você considera um encontro romântico perfeito importante em um relacionamento?", Pontuação: 5 },
    { Pergunta: "Valorizar o respeito é algo que você busca em um relacionamento?", Pontuação: 10 },
    { Pergunta: "Já escreveu uma carta de amor para alguém?", Pontuação: 15 },
    { Pergunta: "Foi surpreendido(a) com alguma atitude doce de alguém?", Pontuação: 10 },
    { Pergunta: "Você acredita em amor à primeira vista?", Pontuação: 20 },
    { Pergunta: "Você tem uma música romântica favorita?", Pontuação: 5 },
    { Pergunta: "Pequenos gestos de carinho são importantes para se sentir amado(a)?", Pontuação: 10 },
    { Pergunta: "Você já teve uma paixonite de infância?", Pontuação: 5 },
    { Pergunta: "No seu relacionamento, você acredita que é mais importante o amor ou a compatibilidade?", Pontuação: 10 },
    { Pergunta: "Você já magoou alguém por causa de ciúmes?", Pontuação: -5 },
    { Pergunta: "Você acredita que é importante ceder em algumas discussões para manter a harmonia no relacionamento?", Pontuação: -10 },
    { Pergunta: "Já teve dificuldade em confiar plenamente em seu parceiro(a)?", Pontuação: -5 },
    { Pergunta: "Você costuma ficar ressentido(a) por muito tempo após uma discussão no relacionamento?", Pontuação: -10 },
    { Pergunta: "Alguma vez ignorou os sentimentos do(a) seu(sua) parceiro(a) para fazer algo que queria?", Pontuação: -5 },
    { Pergunta: "Você já fez um gesto romântico inesperado para surpreender seu(sua) parceiro(a)?", Pontuação: 20 },
    { Pergunta: "Já teve um relacionamento à distância?", Pontuação: 10 },
    { Pergunta: "Você gosta de escrever poemas ou cartas românticas?", Pontuação: 15 },
    { Pergunta: "Já fez uma viagem romântica com seu(sua) parceiro(a)?", Pontuação: 15 },
    { Pergunta: "Você costuma dizer 'eu te amo' com frequência para seu(sua) parceiro(a)?", Pontuação: 10 },
    { Pergunta: "Qual foi a sua melhor lembrança romântica?", Pontuação: 20 },
    { Pergunta: "Você já fez uma serenata para alguém?", Pontuação: 15 },
    { Pergunta: "Já teve uma amizade que evoluiu para um relacionamento romântico?", Pontuação: 20 },
    { Pergunta: "O que você acha que é mais importante em um relacionamento: confiança ou paixão?", Pontuação: 10 },
    { Pergunta: "Já passou por um término doloroso?", Pontuação: -10 },
    { Pergunta: "O que você acha que é um gesto romântico subestimado?", Pontuação: 15 },
    { Pergunta: "Qual é o seu filme romântico favorito?", Pontuação: 5 },
    { Pergunta: "Já escreveu um diário sobre seus sentimentos amorosos?", Pontuação: 10 },
    { Pergunta: "O que você mais gosta de fazer quando está com seu(sua) parceiro(a)?", Pontuação: 15 },
    { Pergunta: "Você já fez um pedido de casamento ou foi pedido(a) em casamento?", Pontuação: 20 },
    { Pergunta: "Já participou de um jantar romântico à luz de velas?", Pontuação: 15 },
    { Pergunta: "Você acredita em destino no amor?", Pontuação: 10 },
    { Pergunta: "Qual é o presente mais romântico que você já recebeu?", Pontuação: 20 },
    { Pergunta: "Você já teve uma conexão imediata com alguém ao conhecê-lo(a)?", Pontuação: 15 },
    { Pergunta: "Qual é o seu lugar romântico favorito para passear com seu(sua) parceiro(a)?", Pontuação: 15 },
    { Pergunta: "Já teve um relacionamento à distância bem-sucedido?", Pontuação: 20 },
    { Pergunta: "O que você acha que mantém um relacionamento forte e duradouro?", Pontuação: 10 },
    { Pergunta: "Você já fez uma viagem romântica espontânea com seu(sua) parceiro(a)?", Pontuação: 20 },
    { Pergunta: "Já fez uma surpresa romântica para celebrar uma data especial?", Pontuação: 15 },
    { Pergunta: "Qual é o melhor conselho de amor que você já recebeu?", Pontuação: 10 },
    { Pergunta: "Qual é a sua fantasia mais íntima?", Pontuação: 15 },
    { Pergunta: "Já teve experiências com jogos eróticos?", Pontuação: 10 },
    { Pergunta: "O que você acha mais excitante em um(a) parceiro(a)?", Pontuação: 5 },
    { Pergunta: "Qual é a sua posição sexual favorita?", Pontuação: 5 },
    { Pergunta: "Já experimentou brinquedos ou acessórios sexuais no relacionamento?", Pontuação: 10 },
    { Pergunta: "O que você acha mais importante na intimidade: qualidade ou quantidade?", Pontuação: 5 },
    { Pergunta: "Já teve algum sonho erótico envolvendo alguém próximo?", Pontuação: 15 },
]

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}


function displayQuestion() {
    currentQuestion = getRandomQuestion();
    task.textContent = currentQuestion.Pergunta;
}




Btns.style.visibility = 'hidden';
const pervi = document.querySelector(".Quests");
pervi.style.visibility = 'hidden';
pervi.style.position = 'absolute';



function StartGame() {
    alert("O Jogo começou, faça as escolhas da maneira que quiser, mas tome cuidado, algumas opçoes machucam. Seja você mesmo <3. ");
    Start.style.visibility = 'hidden';
    Btns.style.visibility = 'visible';
    pervi.style.visibility = 'visible';
    pervi.style.position = 'relative';

    Porcenta.innerHTML = (Por + "%");
    btnA.innerHTML = "SIM";
    btnB.innerHTML = "NAO";
    displayQuestion();
}

Por = Math.min(Math.max(Por, 0), 100);

function Deu_BOM()
{
    if (Por == 100) {
        alert("Você conseguiu!! Atingiu a meta de 100%, você conquistou seu amor. Se quiser mais atualizações, me manda um PIX: (nicolas.n.smaniotto@gmail.com). Um grande abraço ^^. ");
        window.location.reload(true);
    }
}

function updateScore(points) {
    Por += points;
    Porcenta.innerHTML = (Por + "%");
}

function handleAnswer(answer) {
    if (answer === 'Sim') {
        updateScore(currentQuestion.Pontuação > 0 ? currentQuestion.Pontuação : 0);
    } else if (answer === 'Não') {
        updateScore(currentQuestion.Pontuação < 0 ? currentQuestion.Pontuação : 0);
    }
    displayQuestion();
    if (Por <= -10)
    {
        document.querySelector("#ImagemCor").src = HearPartido;
    }
    if (Por >= 10)
    {
        document.querySelector("#ImagemCor").src = HearInteiro;
    }
    if (Por <= -30)
    {
        Foo.style.visibility = 'hidden';
        Foo.style.position = 'absolute';
        Btns.style.position = 'absolute';
        Btns.style.visibility = 'hidden';

        task.innerHTML = "Triste Romance!";
    }
    if (Por == 100)
    {
        Foo.style.visibility = 'hidden';
        Foo.style.position = 'absolute';
        Btns.style.position = 'absolute';
        Btns.style.visibility = 'hidden';
        task.innerHTML = "Você conseguiu!! Atingiu a meta de 100%, você conquistou seu amor. Se quiser mais atualizações, me manda um PIX: (nicolas.n.smaniotto@gmail.com). Um grande abraço ^^. ";
    }
}


btnA.addEventListener('click', () => handleAnswer('Sim'));
btnB.addEventListener('click', () => handleAnswer('Não'));




