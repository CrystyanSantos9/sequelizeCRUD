const PessoaModel = require("../models/pessoaModel")

const index = async ({ pessoa }, req, res)=>{
    try{
        const pessoas = await pessoa.findAll()
        res.render('pessoas/index', {pessoas})
    }catch(err){
        console.log(err)
    }
   
}

const showForm = (req, res) => {
    res.render('pessoas/create') 
}

const createPessoa= async ({pessoa}, req, res) =>{
    try{
        await pessoa.create(req.body)
        res.redirect('/pessoas')
    }catch(err){
        console.log(err)
    }
}

const updateForm = async ( { pessoa }, req, res ) => {
    try{
        const pessoaByPk = await pessoa.findByPk(req.params.id)
        res.render('pessoas/edit', { pessoaByPk })
    }catch(err){
        console.log(err)
    }
   
}

const updatePessoa = async ( { pessoa }, req, res ) => {
    try{
        await pessoa.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/pessoas')
    }catch(err){
        console.log(err)
    }
 
}

const deletePessoa= async ({pessoa}, req, res) =>{
    try{
        await pessoa.destroy({
            where: {
                id: req.params.id 
            }
        })
        res.redirect('/pessoas')
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    index, 
    showForm,
    createPessoa,
    deletePessoa,
    updateForm,
    updatePessoa
}
