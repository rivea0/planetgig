import { model, models, Schema } from "mongoose";

const ReviewSchema = new Schema({
  fromId: { type: String, required: true },
  toId: { type: String, required: true },
  content: { type: String, required: true }
})

const Review = models.Review || model('Review', ReviewSchema)

export default Review