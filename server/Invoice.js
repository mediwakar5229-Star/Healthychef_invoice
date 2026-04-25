const mongoose = require("mongoose");
const schema = new mongoose.Schema({
 customer:String,
 total:Number
});
module.exports = mongoose.model("Invoice", schema);
