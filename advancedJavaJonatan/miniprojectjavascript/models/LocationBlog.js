var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var locationBlogSchema = new Schema({
    info: {type: String, required: true},
    pos: {
        longitude: {type: Number, required: true},
        latitude: {type: Number, required: true}
    },
    //
    author: {type: Schema.Types.ObjectId, ref: "User", required: true},
    likedBy: [{type: Schema.Types.ObjectId, unique: true}],
    created: {type: Date, default: Date.now}
});

locationBlogSchema.virtual("slug").get(function(){
    return "/locationblog/" + this._id;
});

locationBlogSchema.virtual("likes").get(function(){
    return this.likedBy.length;
});

module.exports = mongoose.model("LocationBlog", locationBlogSchema);