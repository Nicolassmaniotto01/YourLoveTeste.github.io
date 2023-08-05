

let Por = 50;
const btnA = document.querySelector("#A");
const Start = document.querySelector("#Start");
const btnB = document.querySelector("#B");
const Porcenta = document.querySelector("#Num_AMOR");
const Btns = document.querySelector(".bts"); 

var Quests;

Btns.style.visibility = 'hidden';

function StartGame() {
    alert("O Jogo começou, faça as escolhas da maneira que quiser, mas tome cuidado, algumas opçoes machucam. Seja você mesmo <3. ");
    Start.style.visibility = 'hidden';
    Btns.style.visibility = 'visible';
    Porcenta.innerHTML = (Por + "%");


    btnA.innerHTML = "";
    btnB.innerHTML = "Sair amanha?"
}



function Deu_BOM()
{
    if (Por == 100) {
        alert("Você conseguiu!! Atingiu a meta de 100%, você conquistou seu amor. Se quiser mais atualizações, me manda um PIX: (nicolas.n.smaniotto@gmail.com). Um grande abraço ^^. ");
        window.location.reload(true);
    }
}

function calc(){

if (Por >= 50) {
    Por += 5;
}
else
{
    Por += 10;
    
}
}


function Perguntas()
{
    if (btnA.addEventListener("Click", pressA)) {
        Quests =  1;
    }
}


//Limitador
Por = Math.min(Math.max(characterLove, 0), 100);

// Atualize a exibição do medidor de amor

btnA.addEventListener("Click", pressA);
function pressA(){
    calc(Por);
    Porcenta.innerHTML = (Por + "%");
    btnB.innerHTML = "Fudeo?";
    Deu_BOM();
    
}


 btnB.addEventListener("Click", pressB);
 function pressB(){
     calc(Por);
     Porcenta.innerHTML = (Por + "%");
     btnB.innerHTML = "Sair amanha?"
}






