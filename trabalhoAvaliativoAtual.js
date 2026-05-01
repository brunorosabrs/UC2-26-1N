const ask = require('readline-sync');

//Parte 1 - Criação de Usuário

function criarUsuario(nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies];
}

//Parte 2 - Formatar Hobbies

function formatarHobbies(hobbies){
    return hobbies.join(", ")
}

//Parte 3 - Geração de Descrição

function gerarDescricao(usuario){
    return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}

//Parte 4 – Sistema de Cadastro

function adicionarUsuario(usuarios, usuario){
    let usuarioAtualizado = [...usuarios, usuario]
    return usuarioAtualizado
}

function gerarRelatorio(usuarios){
    return `Total de usuários: ${usuarios.length}`
}
//------------------------------------------

let usuarios = []


// Criação de usuário

let nome = ask.question('Digite o seu nome: ');
let idade = Number(ask.question('Digite sua idade: '))
let cidade = ask.question('Digite sua cidade: ')
let primeiroHobby = ask.question('Digite seu primeiro hobbie: ')
let segundoHobby = ask.question('Digite seu segundo hobbie: ')

let user1 = criarUsuario(nome, idade, cidade, [primeiroHobby, segundoHobby])

usuarios = adicionarUsuario(usuarios, user1)
console.clear()
console.log(user1)
let hobbiesdoUser1 = formatarHobbies(user1[3])
console.log(hobbiesdoUser1)
console.log(gerarDescricao(user1));
console.log(gerarRelatorio(usuarios));


