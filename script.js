// Estrutura de repetição

i = 0;
for(let i=0; i<10; i++){
    //console.log(i)
}

// While
let f = 0;
while (f < 10){
    //console.log(f)
    f++
}

// do while
let w = 0;

do{
    //console.log(w)
    w++;
}
while(w < 5);

// funções
let nome = 'fiap';

function ola(nome){
    // `` (strings literais ou templater string, ${} chama a variável)
    console.log(`Seja bem vindo a ${nome}`)
    //alert(`Seja bem vindo a ${nome}`)
    document.write(`seja bem vindo a ${nome}`)
}
// executando a função ola passando o valor
ola(nome)

// Arrow Function, a grosso modo é como se fosse a function reduzida

const hello=()=>(console.log("função arrow function"))

hello()

// Array [], Objeto {} e Metodos ()

let jogadores = [
    {nome:"Huguinho", idade: 17},
    {nome:"Zezinho", idade: 18},
    {nome:"Luizinho", idade: 19}
]

let listarJogadores = jogadores.map(function(item){
    return item.nome
})
console.log(listarJogadores)