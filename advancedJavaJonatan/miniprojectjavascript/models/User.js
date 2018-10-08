var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Used as an example for embedding bro ;)
var jobSchema = new Schema({
    type: String,
    company: String,
    companyUrl: String
});

var userSchema = new Schema({
    userName : {type: String, unique: true, required: true},
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    password : {type: String, required: true},
    email : {type: String, unique: true, required: true},
    //Embedding
    job : {jobSchema},
    created: {type: Date, default: Date.now},
    lastUpdated: {type : Date}
});

userSchema.pre("save", function(next){
    this.password = "hash_me_and_add_some_salt" + this.password;
    this.lastUpdated = new Date();
    next();
});

userSchema.pre("update", function(next){
    this.update({}, {$set: {lastUpdated: new Date()}});
    next();
});

module.exports = mongoose.model("User", userSchema);