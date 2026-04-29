const ask = require('readline-sync')

// Parte 1 - Criar Usuario
function criarUsuario(nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies];
}

// Parte 2 - Formatar Hobbies 
function formatarHobbies(hobbies) {
    let ultimo = hobbies[hobbies.length - 1];
    let inicio = hobbies.slice(0, -1);

    return inicio.join(", ") + " e " + ultimo;
}

// Parte 3 - Gerar Descrição
function gerarDescricao(usuario){
    let nome = usuario[0].toUpperCase();
    let idade = usuario[1];
    let cidade = usuario[2];
    let hobbies = formatarHobbies(usuario[3]);

    return nome + " tem " + idade + " anos, mora em " + cidade + " e gosta de: " + hobbies + ".";
}

// Parte 4 - Sistema de Cadastro

//Adicionar Usuário
function adicionarUsuario(usuarios, usuario) {
    return [...usuarios, usuario];
}

//Gerar Relatório
function gerarRelatorio(usuarios) {
    return "Total de usuários: " + usuarios.length;
}

// EXECUÇÃO
let usuarios = [];

// usuário 1
let nome1 = ask.question('Digite seu nome: ');
let idade1 = Number(ask.question('Digite sua idade: '));
let cidade1 = ask.question('Digite sua cidade: ');
let hobbies1 = ask.question('Digite seus hobbies: ')
    .split(',')
    .map(h => h.trim());

const user1 = criarUsuario(nome1, idade1, cidade1, hobbies1);
usuarios = adicionarUsuario(usuarios, user1);

console.log(gerarDescricao(user1)); 

// usuário 2
let nome2 = ask.question('Digite seu nome: ');
let idade2 = Number(ask.question('Digite sua idade: '));
let cidade2 = ask.question('Digite sua cidade: ');
let hobbies2 = ask.question('Digite seus hobbies: ')
    .split(',')
    .map(h => h.trim());

const user2 = criarUsuario(nome2, idade2, cidade2, hobbies2);
usuarios = adicionarUsuario(usuarios, user2);

console.log(gerarDescricao(user2));

// relatório final
console.log(gerarRelatorio(usuarios));
