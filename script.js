// ATT 1

function frase() { // função sem parametro e com varivel local - Comum
    let palavra = "Exibindo uma mensagem no console"
    console.log(palavra);
}
frase() // Chamando a função

//  ATT 2

function nome(meuNome) { //Parametro passado
    console.log(`Nome referente: ${meuNome}`); // Tamplate
}
nome(`Mariana`) // Declarando

//  ATT 3

function caracteristicas(nome, idade, estiloMusical) { // Função com parametro
    console.log(`Seu nome: ${nome}, Sua idade: ${idade}, seu estilo musical: ${estiloMusical}`); // template string

}
caracteristicas(`Mariana`, `19`, `Rock`) // Declarando os parametros passados

// ATT 4

function moveAndMusic(filme, frase, musica) { // Função com parametro
    console.log(`Filme: ${filme}, Frase icônica: ${frase}. Musica: ${musica}`);  // template string
}
moveAndMusic(`As vantagens de ser invisivel`, `E nesse momento, eu juro, nós somos infinitos`, `“Heroes” de David Bowie`) // Declarando os parametros passados 

// ATT 5

function numb(numero) { // Função com parametro
    console.log(`O triplo é ${numero}`);
}
numb(5 * 3)
//ou
function double(num){
    return num*3;
    }
    console.log(double(2))

// ATT 6

let verifica = 20
function verificador() {
    console.log(verifica === 20)
}
verificador()

