'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express ();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hola/:name', (req, res)=> {
	res.send({message: `Hola ${req.params.name}`});
})

app.listen(port, () => {
	console.log(`API REST running on http://localhost:${port}`);
})