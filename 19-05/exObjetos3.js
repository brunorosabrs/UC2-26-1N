const ask = require('readline-sync');

const film = {
    name: 'Objetos',
    yearsOfRelease: '2026',
    cast: ['Bruno', 'Rosa', 'Santos'],
    description: function () {
        console.log('Nome do filme:', film.name);
        console.log('Ano de lançamento:', film.yearsOfRelease);
        console.log('Elenco:', film.cast.join(', '));
        console.log(`Ator ${film.cast[0]} eh o personagem ${film.characters[0]}\nAtor ${film.cast[1]} eh o personagem ${film.characters[1]}\nAtor ${film.cast[2]} eh o personagem ${film.characters[2]}`)

        let question1 = ask.question('Voce ja viu este filme? (sim / nao) ');

        if (question1.toLowerCase() === 'sim') {
            return 'O usuario já viu este filme';
        } else {
            return 'Filme não visto ainda';
        }
    }
};

film.characters = ['Arthur', 'Beatriz', 'Caio'];
film.cast[0] = 'Xuxa'
console.log(film.description());