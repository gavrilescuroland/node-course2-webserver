const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    const whatever = { pageTitle:'Home Page', year: new Date().getFullYear(), message:'Welcome to this channel' };
    response.render('home.hbs',whatever);
});

app.get('/about', (request, response) => {
    const whatever = { pageTitle:'About Page', year: new Date().getFullYear() };
    response.render('about.hbs', whatever);
});

app.get('/bad', (request, response) => { response.send({ error:'Unable to request' }); });

app.listen(3000);

console.log('Server is up on port 3000.');

