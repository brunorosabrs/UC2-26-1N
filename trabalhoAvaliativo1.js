const ask = require('readline-sync')

// Parte 1
function criarUsuario(nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies];
}

// Parte 2
function formatarHobbies(hobbies) {
    let ultimo = hobbies[hobbies.length - 1];
    let inicio = hobbies.slice(0, -1);

    return inicio.join(", ") + " e " + ultimo;
}

// Parte 3
function gerarDescricao(usuario){
    let nome = usuario[0].toUpperCase()
    let idade = usuario[1];
    let cidade = usuario[2];
    let hobbies = formatarHobbies(usuario[3]);

    return nome + " tem " + idade + " anos, mora em " + cidade + " e gosta de: " + hobbies + ".";
}

// Parte 4
function adicionarUsuario(usuarios, usuario) {
    return [...usuarios, usuario];
}

function gerarRelatorio(usuarios) {
    return "Total de usuários: " + usuarios.length;
}

// 🚀 EXECUÇÃO (AGORA SIM NO FINAL)
let lista = [];

// usuário 1
let nome1 = ask.question('Digite seu nome: ');
let idade1 = Number(ask.question('Digite sua idade: '));
let cidade1 = ask.question('Digite sua cidade: ');
let hobbies1 = ask.question('Digite seus hobbies: ')
    .split(',')
    .map(h => h.trim());

const user1 = criarUsuario(nome1, idade1, cidade1, hobbies1);
lista = adicionarUsuario(lista, user1);

// usuário 2
let nome2 = ask.question('Digite seu nome: ');
let idade2 = Number(ask.question('Digite sua idade: '));
let cidade2 = ask.question('Digite sua cidade: ');
let hobbies2 = ask.question('Digite seus hobbies: ')
    .split(',')
    .map(h => h.trim());

const user2 = criarUsuario(nome2, idade2, cidade2, hobbies2);
lista = adicionarUsuario(lista, user2);

// saída
console.log(gerarDescricao(user1));
console.log(gerarDescricao(user2));
console.log(gerarRelatorio(lista));
