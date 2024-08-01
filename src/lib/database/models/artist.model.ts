import { model, models, Schema } from "mongoose";

const ArtistSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  photo: { type: String, required: true },
  genre: { type: String },
  submissions: { type: [Schema.Types.ObjectId], ref: 'Submission' },
  // @ts-ignore
  socialLinks: { type: Map, of: String },
})

const Artist = models.Artist || model('Artist', ArtistSchema)

export default Artist