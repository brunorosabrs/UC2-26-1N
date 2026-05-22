//// EXERCICIO 2 ( CADASTRO DE USUARIOS USANDO OBJETOS)

const ask = require('readline-sync');
const users = [];


function createAccount() {
    const user = {
        username: ask.question('Enter a username to register: '),
        password: ask.question(`Enter a password to register: `, { hideEchoBack: true, mask: `*` }),
    }
    users.push(user)
    console.log(`User ${user.username} successfully registered`),
        ask.question('Press ENTER to continue...')
}

function login() {
    const userLogin = {
        userTyped: ask.question('Enter your username: '),
        passTyped: ask.question(`Enter your password: `, { hideEchoBack: true, mask: `*` }),

    }
    if (users[0].username === userLogin.userTyped &&
        users[0].password === userLogin.passTyped) {
        console.log('Login successful');
    } else {
        console.log('Incorrect username or password');
    }

}

function showUser() {
    console.log(users);

}


while (true) {
    console.clear()
    console.log(`
1 - Register new user
2 - Login
3 - Show users
0 - Exit
`)

    let option = Number(ask.question(`Choose option: `))

    switch (option) {
        case 1:
            console.clear()
            createAccount()
            break
        case 2:
            console.clear()
            login()
            ask.question('Press ENTER to continue...')
            break
        case 3:
            console.clear()
            showUser()
            ask.question('Press ENTER to continue...')
            break
        case 0:
            console.clear()
            process.exit()
            ask.question('Press ENTER to continue...')
            break
        default:
            console.clear()
            console.log('Invalid option')
            ask.question('Press ENTER to continue...')

    }
}




