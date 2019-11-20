var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var commentschema = new Schema({
    thename:String,
    message:String,
    idmovie:String
});

var commentmodel = mongoose.model("comment",commentschema);
exports.model = commentmodel;