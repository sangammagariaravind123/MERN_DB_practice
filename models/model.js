import mongoose from "mongoose";

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const Alien = mongoose.model("Alien", product);
export default Alien;
