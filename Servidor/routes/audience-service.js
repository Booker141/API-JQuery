'use strict';

const MongoClient = require('mongodb').MongoClient;
let db;
let ObjectId = require('mongodb').ObjectID;
const Audience = function () {};

Audience.prototype.connectDb = function (callback) {
	MongoClient.connect("mongodb+srv://admin:admin@probandorest-4fkhk.mongodb.net/test?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, function (err, database) {
		if (err) {
			callback(err);
		}
		db = database.db('ProbandoREST').collection('audience');
		callback(err, database);
	});
};

Audience.prototype.add = function (person, callback) {
	return db.insertOne(person, callback);
};

Audience.prototype.get = function (_id, callback) {
	return db.find({_id: ObjectId(_id)}).toArray(callback);
};

Audience.prototype.getAll = function (callback) {
	return db.find({}).toArray(callback);
};

Audience.prototype.update = function (_id, updatedPerson, callback) {
	delete updatedPerson._id;
	return db.updateOne({_id: ObjectId(_id)}, {$set: updatedPerson}, callback);
};

Audience.prototype.remove = function (_id, callback) {
	return db.deleteOne({_id: ObjectId(_id)}, callback);
};

Audience.prototype.removeAll = function (callback) {
	return db.deleteMany({}, callback);
};

module.exports = new Audience();