// const mongoose = require('mongoose');
// const mongooseConnection = require('./mongooseConnection');

// const commentSchema = new mongoose.Schema({
//     createdBy:{
// 		_id: {
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: 'User',
// 			required: true,
// 		},
// 		imageUrl: {
// 			type: String,
// 			required: true,
//             default:""
// 		},
// 	},
//     createdOn: { type: Date, default: Date.now },
//     resourceType: { type: String, enum: ["ques", "ans"] },
//     resourceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true},
//     comment: { type: String, maxLength: 500, required: true }
// });

// const Comment = mongooseConnection.model('Comment', commentSchema);

// module.exports = Comment;

