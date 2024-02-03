let saldo = 1000

while(true) {
    const menu = Number(prompt("Escolha uma das opções:\n1- Ver Saldo\n2- Sacar\n3- Depósito\n4- Sair"))
    if (menu === 1) {
        console.log(`Seu saldo atual é: ${saldo}`)
    }else if(menu === 2) {
        const saque = Number(prompt("Quanto voce deseja sacar?: "))
        if (saque <= saldo && saque > 0) {
            saldo = saldo - saque
            console.log(`Saque efetuado com sucesso, saldo atual: ${saldo}`)
        }else {
            console.log("Valor indisponível")
        }
    }else if(menu === 3) {
        const deposito = Number(prompt("Quanto voce deseja depositar? "))
        if (deposito > 0) {
            saldo = saldo + deposito 
            console.log(`Deposito realizado com sucesso, seu saldo é: ${saldo}`)
        }else {
            console.log("Valor inválido")
        }
    }else if(menu === 4) {
        console.log ("Obrigado por usar nosso banco!")
    }else {
        break;
    }
}