import { Document, model, models, Schema } from "mongoose";

export interface IGig extends Document {
  _id: string,
  venue: string,
  location: string,
  pay?: string,
  gigType: string,
  genre?: string,
  date: Date,
  createdAt: Date
}

const GigSchema = new Schema({
  venue: { type: String, required: true },
  location: { type: String, required: true },
  pay: { type: String },
  gigType: { type: String, required: true },
  genre: { type: String },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  organizer: { type: Schema.Types.ObjectId, ref: 'Organizer' },
})

const Gig = models.Artist || model('Gig', GigSchema)

export default Gig