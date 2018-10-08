var mongoose = require("mongoose");
require("./User");
var User = mongoose.model("User");

User.find({userName: "kurt"}).exec()
.then()
.catch()

User.findOneAndUpdate({userName: "kurt"}, {$set: {email: "new@mail.dk"}}).exec()