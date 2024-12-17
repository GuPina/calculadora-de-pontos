const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function totalDeVitorias(vitorias, derrotas){
    let total = vitorias - derrotas;
    return total;

}

function saldoVitorias(vi) {
    if (vi <= 10) {
        return 'Ferro';
    } else if (vi >= 11 && vi <= 20) {
        return 'Bronze';
    } else if (vi >= 21 && vi <= 50) {
        return 'Prata';
    } else if (vi >= 51 && vi <= 70) {
        return 'Ouro';
    } else if (vi >= 71 && vi <= 80) {
        return 'Diamante';
    } else if (vi >= 81 && vi <= 90) {
        return 'Lendário';
    } else if (vi >= 91 && vi <= 100) {
        return 'Imortal';
    } else if (vi >= 101) {
        return 'GOD';
    } else {
        return 'Perdedor';
    }
}

rl.question('Qual é o nome do personagem?' , (nome) => {
    rl.question('Qual é o total de vitorias do seu personagem: ', (vitorias) =>{
        rl.question('Qual é o total de derrotas do seu personagem: ', (derrotas) => {
            const total = totalDeVitorias(parseInt(vitorias), parseInt(derrotas));
            const saldo = saldoVitorias(total);
           
            console.log(`O Herói de nome ${nome} saldo ${total} nivel ${saldo}`);
        })
           
        
    } )
})