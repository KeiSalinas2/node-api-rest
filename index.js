'use strict'

const express = require('express');
const bodyParser = require('body-parser');

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
	console.log(req.body)
	res.send(200, {message: 'El producto se ha recibido'})
})

app.put('/api/product/:id', (req, res) => {

})

app.put('/api/product/:id', (req, res) => {

})

app.listen(port, () => {
	console.log(`API REST running on http://localhost:${port}`);
})