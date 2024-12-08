const fs = require('fs');

test('La página debe contener el título "Hola Mundo"', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toMatch(/<h1>¡Hola Mundo!<\/h1>/);
});
