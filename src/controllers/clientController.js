const mongoose = require('mongoose')
const Client = mongoose.model('Client')

module.exports = {
    async getClients(req, res){
        try{
            const data = await Client.find()
            return res.json(data)
        }catch(e){
            return res.send({ message: `Falha ao carregar clientes\n ${e.message}`})
        }
    },
    async getClient(req, res){
        try{
            const client = await Client.findById(req.params.id)
            return res.json(client)
        }catch(e){
            res.send(`Falha ao encontrar cliente \n ${e.message}`)
        }
    },
    async Create(req, res){
        try{
            const client = await Client.create(req.body)
            return res.json(client)
        }catch(e){
            res.send(`Falha ao cadastrar\n ${e.message}`)
        }
    },
    async Update(req, res){
        try{
            const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true})
            return res.json(client)
        }catch(e){
            res.send(`Falha ao atualizar\n ${e.message}`)
        }
    },
    async Delete(req, res){
        try{
            const client = await Client.findByIdAndDelete(req.params.id)
            return json(client)
        }catch(e){
            res.send(`Falha ao deletar cliente\n ${e.message}`)
        }
    }
}
