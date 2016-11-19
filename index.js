'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/products');

const app = express ();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/product', (req, res) => {
	res.status(200).send({products: []})
})

app.get('/api/product/:id', (req, res) =>{
})

app.post('/api/product', (req, res) => {
	console.log('POST /api/product')
	console.log(req.body)

	let product = new Product()

	product.name = req.body.name
	product.price = req.body.price
	product.picture = req.body.picture
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {
		if (err) { res.status(500).send({message: 'Error al guardar en la base de datos'})}
		else{

			res.status(200).send({ productStored })
		}
	})
})

app.put('/api/product/:id', (req, res) => {

})

app.put('/api/product/:id', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
	if (err){
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexión a la base de datos establecida...')
	app.listen(port, () => {
		console.log(`API REST running on http://localhost:${port}`);
	})
})
