var mongoose = require("mongoose");
var User = require("../models/user");

function getAllUsers() {
  return User.find({}).exec();
}

function addUser(firstName, lastName, userName, password, email) {
  const userDetail = {firstName, lastName, userName, password, email};
  const user = new User(userDetail);
  return user.save();
}

function findByUsername(username) {
    return User.findOnce({ userName: username }).exec();
}

function findById(id) {
  return User.findById({ _id:id }).exec();
}

module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  findByUsername: findByUsername,
  findById: findById,
}