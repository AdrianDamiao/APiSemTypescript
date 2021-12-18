const app = require('./app');

app.get('/', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        mensagem: 'Olá mundo!'
    })
})

app.post('/', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        mensagem: 'requisição com o POST'
    })
})

app.put('/', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        mensagem: 'requisição com o PUT'
    })
})

app.listen(3000, () => {
    console.log('Servidor iniciado...');
})
