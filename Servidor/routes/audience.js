'use strict';

const express = require('express');
const router = express.Router();
const audienceService = require('./audience-service');

router.get('/', function (req, res) {
	audienceService.getAll((err, audience) => {
		if(err){
			res.status(500).send({msg: err});
		} else if (audience === null){
			res.status(500).send({msg: "No hay público"});
		} else {
			res.status(200).send(audience);
		}
	});
});

router.get('/:_id', function (req, res) {
	let _id = req.params._id;
	audienceService.get(_id, (err, person) => {
		if(err){
			res.status(500).send({msg: err});
		} else if(person === null){
			res.status(500).send({msg: 'No existe dicho asistente'});
		} else {
			res.status(200).send(person);
		}
	});
});

router.post('/', function (req, res) {
	let person = req.body;
	audienceService.add(person, (err, person) => {
		if(err){
			res.status(500).send({msg: err});
		} else if(person !== null){
			res.send({msg: 'Asistente añadido'});
		}
	});
});

router.put('/:_id', function (req, res) {
	const _id = req.params._id;
	const updatedPerson = req.body;
	audienceService.update(_id, updatedPerson, (err, numUpdates) => {
		if(err || numUpdates === 0) {
			res.status(500).send({msg: err});
		} else {
			res.status(200).send({msg: 'Asistente modificado'});
		}
	});
});

router.delete('/', function (req, res) {
	audienceService.removeAll((err) => {
		if(err){
			res.status(500).send({msg: err});
		} else {
			res.status(200).send({msg: 'Público eliminado'});
		}
	});
});

router.delete('/:_id', function (req, res) {
	let _id = req.params._id;
	audienceService.remove(_id, (err) => {
		if(err){
			res.status(404).send({msg: err});
		} else {
			res.status(200).send({msg: 'Asistente eliminado'});
		}
	});
});

module.exports = router;