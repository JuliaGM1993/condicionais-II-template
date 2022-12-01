// // ternário

let chuva = true

chuva ? console.log("Leva sombrinha") : console.log("Pode deixar a sombrinha")

idadeDependente >= 13 ? console.log("Pode ter o cartão") : console.log("Consulte outras opções")

// Switch-case

let escolhaUsuario 
// = Number(prompt("Digite um numero de 1 a 4 para escolher o cartão"))
let cartao
switch(escolhaUsuario){
    case 1:
        cartao = "Fácil"
        break;
    case 2: 
        cartao = "Black"
        break;
    case 3:
        cartao = "Platinum"
        break;
    case 4:
        cartao = "Master gold"
     default:
        console.log("Escolha uma das quatro opções disponíveis")
        break
}
console.log("Cartão", cartao)

let numero = Number(prompt("Digite um número"))

if(numero % 2 === 0){
    if(numero % 3 === 0)
    console.log("é divisivel por 2 e por 3")
}else{
    console.log("Não é divisível por 2 e por 3")
}

if(numero% 2 === 0 && numero % 3 === 0){
    console.log("É divisivel por 2 e 3")
    numero === 30 ? 
    console.log("UFA ACERTEI!"):
    console.log("Não foi dessa vez")
}else{
    console.log("Não é divisível por 2 e 3")
}


//SWITCH CASE

if(numero % 2 === 0 && numero % 3 === 0){
    console.log("É divisivel por 2 e 3")
    switch(numero){
        case 6:
           console.log("O número 6 é divisivel por 3 e 2")
           break
        case 12:
            console.log("O número 12 é divisível por 3 e 2")
            break
        case 18:
            console.log("O número 18 é divisível por 3 e 2")
           break
        case 24:
            console.log("O número 24 é divisível por 3 e 2")
            break
        case 30: 
        console.log("UFA ACERTEI")
            break
        default:
            console.log("O número é maior que 30 e menor que 6")
            break
    }
}else if(numero % 2 === 0){
    console.log("O número é divisível por 2") 
}else if (numero % 3 === 0){
    console.log("O número é divisível por 3")
}else {
    console.log("O número não é divisível por 2 nem por 3")
}
