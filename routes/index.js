'use strict'

'use strict'

const express = require('express');
const productCtrl = require('../controllers/product')
const api = express.Router();

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
api.put('/product/:productId', productCtrl.updateProduct)

module.exports = api