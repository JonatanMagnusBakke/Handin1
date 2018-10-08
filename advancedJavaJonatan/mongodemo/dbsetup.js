var mongoose = require("mongoose");
var mongoCon = "mongodb://jbakke:0201Bakke@ds119663.mlab.com:19663/jbakke";
mongoose.Promise = global.Promise;
mongoose.connect(mongoCon, {useNewUrlParser: true, useCreateIndex: true});
