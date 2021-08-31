import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  openingHours: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
});

export default mongoose.models.restaurant ||
  mongoose.model("restaurant", RestaurantSchema);
