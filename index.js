'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express ();
const port = process.env.port || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`API REST running on http://localhost:${port}`);
})