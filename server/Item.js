const mongoose = require("mongoose");
const schema = new mongoose.Schema({
 name:String,
 basePrice:Number
});
module.exports = mongoose.model("Item", schema);
