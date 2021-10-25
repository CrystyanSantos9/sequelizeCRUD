const Sequelize = require('sequelize')
const sequelize = new Sequelize('sequelize-teste','root', 'senha',{
    dialect: 'mysql',
    host: '172.17.0.2'
})

const models = {}
const fs = require('fs')
const path = require('path')
fs
    .readdirSync(__dirname)
    .filter((file)=> file !== 'index.js')
    .forEach((file)=>{
        const model = sequelize.import(path.join(__dirname,file))
        models[model.name] = model
        console.log(model.name)
    })

// const pessoa = sequelize.import('./pessoaModel.js')

module.exports = {
    sequelize,
    models
}