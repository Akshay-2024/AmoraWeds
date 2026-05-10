import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Review ||
  mongoose.model("Review", ReviewSchema);