const express = require('express')
const path = require('path') // para lidarmos com a configuração do nosso template ejs
const app = express() // iniciando nosso servidor 
const port = process.env.PORT || 3355

//DB connection
const model = require('./models/index')

//ROUTES
const pessoas = require('./routes/pessoas')
//utilizando middleware para identificar formato da requisição. 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//configurando onde nossos arquivos estáticos ficarão
app.use(express.static('public'))
app.get('/', (req, res)=> res.render('index'))
//definindo rotas
app.use('/pessoas', pessoas)
//definindo onde nossos arquivos de front ficarão
app.set('views', path.join(__dirname, 'views')) //dirname é a partir do nosso diretório raiz
//informando a nossa engine de renderização das views
app.set('view engine', 'ejs')

model.sequelize.sync().then(()=>{
    app.listen(port, ()=>console.log('APP is Listening ...'))
})

