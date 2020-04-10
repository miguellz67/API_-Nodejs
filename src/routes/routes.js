const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clientController')

router.get('/cliente', clientsController.getClients)
router.get('/cliente/:id', clientsController.getClient)
router.put('/cliente/:id', clientsController.Update)
router.post('/cliente', clientsController.Create)
router.delete('/cliente', clientsController.Delete)

module.exports = router