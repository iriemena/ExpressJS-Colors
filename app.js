const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('app runnng...')
});

app.get('/', (req, res)=>{
    res.render('index', {title: 'rgb'})
});

app.get('/hex3', (req, res)=>{
    res.render('hex3', {title: 'hex3'})
});

app.get('/hex6', (req, res)=>{
    res.render('hex6', {title: 'hex6'})
})