const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlowerSchema = new Schema({
 
  name: {
    type: String,
  },
  instructions: {
    type: String,
  },
  photo: {
    type: String,
  }
});

// This creates our model from the above schema, using mongoose's model method
const floweredModel = mongoose.model("flower", FlowerSchema);

// Export the Article model
module.exports = floweredModel;