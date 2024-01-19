alert("Bem Vindo ao jogo do Número Secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//Enquanto chute não for igual ao Número Secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Se chute fort igual ao número secreto
    if (numeroSecreto == chute) {
    break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavratentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Parabens! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavratentativa}`);

//if (tentativas > 1) {
//    alert(`Parabens! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas`);
//} else {
//    alert(`Parabens! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa`);
//}
