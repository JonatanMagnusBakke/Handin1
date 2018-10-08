var mongoose = require("mongoose");
require("./dbsetup");

var userSkema = new mongoose.Schema({
    userName : {type: String, required: true},
    email : {type: String, unique: true},
    modified: {type: Date, default: Date.now}
});

userSkema.pre("save", function(next){
    this.modified = new Date();
    next();
});

mongoose.model("User", userSkema);