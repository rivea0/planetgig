import { model, models, Schema } from "mongoose";

const GigSchema = new Schema({
  venue: { type: String, required: true },
  location: { type: String, required: true },
  pay: { type: String },
  gigType: { type: String, required: true },
  genre: { type: String },
  date: { type: Date, required: true },
  imageUrl: { type: String },
  // createdAt: { type: Date, default: Date.now },
  organizer: { type: Schema.Types.ObjectId, ref: 'Organizer' },
})

const Gig = models.Gig || model('Gig', GigSchema)

export default Gig