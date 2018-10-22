var mongoose = require("mongoose");
var LocationBlog = require("../models/LocationBlog");



function addLocationBlog(info, lat, long, author) {
    const detail = { info, lat, long, author };
    const blog = new LocationBlog(datail);
    return blog.save();
}
function likeLocationBlog(blog ,user) 
{
    blog.likedBy.push(user._id);
    return blog.save();
}

function findById(id) {
  return LocationBlog.findById({ _id:id }).exec();
}