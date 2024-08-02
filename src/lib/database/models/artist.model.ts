import { model, models, Schema } from "mongoose";

const ArtistSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  bio: { type: String },
  photo: { type: String, required: true },
  genres: { type: [String] },
  nameToDisplay: { type: String, required: true },
  submissions: { type: [Schema.Types.ObjectId], ref: 'Submission' },
  socialLinks: { type: Map, of: String },
  reviews: { type: [Schema.Types.ObjectId], ref: 'Review' },
  images: { type: [String] },
  videos: { type: [String] },
})

const Artist = models.Artist || model('Artist', ArtistSchema)

export default Artist