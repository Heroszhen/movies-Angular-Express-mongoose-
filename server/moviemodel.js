var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var movieschema = new Schema({
    title:String,
    last:Number,
    plot:String,
    starring:String,
    image:String
});

var moviemodel = mongoose.model("film",movieschema);
exports.model = moviemodel;