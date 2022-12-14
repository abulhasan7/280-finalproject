const mongoose = require('mongoose');
const mongooseConnection = require('./mongooseConnection');

const questionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		maxlength: 1000,
	},
	descr: {
		type: String,
		required: true,
	},
	views: {
		type: Number,
		default: 0,
	},
	votes: {
		type: Number,
		default: 0,
	},
	space: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Space',
	},
	isUnAnswered:{
		type:Boolean,
		default:true
	},
	answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answer',
		default: [],
	}],
	followers:{
		type:Number,
		default:0
	},
	createdBy: {
		_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		firstname:{
			type:String,
			default:"Anonymous"
		},
		lastname:{
			type:String,
			default:"Mozart"
		},
		imageUrl: {
			type: String,
			maxLength: 500,
			default: ""
		},
	},
	createdOn: {
		type: Date,
		default: Date.now,
	},
	modifiedOn: {
		type: Date,
		default: Date.now,
	},
	reviewStatus: {
		type: String,
		enum: ['pending', 'approved', 'rejected'],
		required: true,
		default: 'approved'
	},
	imageUrls: [{
		type: String,
		default: ""
	}],
});

const Question = mongooseConnection.model('Question', questionSchema);

module.exports = Question;