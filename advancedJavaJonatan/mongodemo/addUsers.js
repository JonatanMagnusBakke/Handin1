var mongoose = require("mongoose");
require("./User");
var User = mongoose.model("User");

User.deleteMany({}, ()=> console.log("all deretededed"));


var kurt = new User({userName: "Kurt", email: "kurt@hej.dj"});
var hanne = new User({userName: "Hanne", email: "hanne@hej.dj"});

var newUserP = [kurt.save(), hanne.save()];
Promise.all(newUserP)
.then(users => console.log(users.length))
.catch(err => console.log(err));
