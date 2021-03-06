'use strict'

const express = require('express');
const Product = require('../models/products');

function getProduct(req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product) =>{
		if (err) return res.status(500).send({message: `Error al conectar a la base de datos: ${err}`})
		if(!product) return res.status(404).send({message: `El producto no existe`})

		res.status(200).send(product)
	})
}

function getProducts(req, res){
	Product.find({}, (err, products) => {
		if (err) return res.status(500).send({message: `Error al conectar a la base de datos: ${err}`})
		if(!products) return res.status(404).send({message: `No existen productos`})

		res.status(200).send({products})
	})
}

function saveProduct(req, res){
	console.log('POST /api/product')
	console.log(req.body)

	let product = new Product()

	product.name = req.body.name
	product.price = req.body.price
	product.picture = req.body.picture
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {
		if (err) return res.status(500).send({message: 'Error al guardar en la base de datos'})

		res.status(200).send({ productStored })
	})
}

function updateProduct(req, res){
	let productId = req.params.productId
	let update = req.body

	console.log('aqui')

	Product.findByIdAndUpdate(productId, update, (err, productUpdate) =>{
		if (err) return res.status(500).send({message: `Error al actualizar el producto: ${err}`})
		res.status(200).send({product: productUpdate})
	})
}

function deleteProduct(req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product) =>{
		if (err) return res.status(500).send({message: `Error al borrar el producto: ${err}`})

		Product.remove(err => {
			if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
			res.status(200).send({message: 'El producto ha sido eliminado'})
		})
	})
}

module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}