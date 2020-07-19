var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String,
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},{
    timestamps: true
});


var forumSchema = new Schema({
    title: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Forum', forumSchema);