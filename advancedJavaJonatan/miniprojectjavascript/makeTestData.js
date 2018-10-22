require("./dbSetup.js")();

var User = require("./models/User.js");
var LocationBlog = require("./models/LocationBlog.js");
var Position = require("./models/Position.js");

//Utility Function to create users
function userCreate(firstName, lastName, userName, password, email, type, company, companyUrl) {
    const job = [{ type, company, companyUrl }];
    const userDetails = { firstName, lastName, userName, password, email, job };
    const user = new User(userDetails);
    return user.save();
}
//Utility Function to create Positions
function positionCreator(lon, lat, userId, dateInFuture) {
    let posDetails = { user: userId, loc: { coordinates: [lon, lat] } };
    if (dateInFuture) {
        posDetails.created = "2022-09-25T20:40:21.899Z";
    }
    let pos = new Position(posDetails);
    return pos.save();
}
//Utility Function to create LocationBlogs
function locationBlogCreator(info, author, longitude, latitude) {
}
// Here we will setup users
async function createUsers() {
    await User.deleteMany({});
    await Position.deleteMany({});
    await LocationBlog.deleteMany({});

    const userPromises = [
        userCreate("Jonatan", "Bakke", "jbakke", "hej", "jonatan@bakke.net", "a type", "Bruhn Newtech", "newtech.dk"),
        userCreate("Fredrik", "Bakke", "fbakke", "hej", "fredrik@bakke.net", "a type", "NetCompany", "netcompany.dk"),
        userCreate("Nicolai", "Bakke", "nkbakke", "hej", "nicolai@bakke.net", "a type", "getsmoney", "freemoney.dk")
    ];

    var users = await Promise.all(userPromises);

    var positionPromises = [
        positionCreator(10, 11, users[0]._id, true), 
        positionCreator(10, 11, users[1]._id, true), 
        positionCreator(10, 11, users[2]._id, true)
    ];

    var positions = await Promise.all(positionPromises);

    console.log("done");
}

createUsers();