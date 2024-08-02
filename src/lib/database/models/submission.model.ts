import { model, models, Schema } from 'mongoose'

const SubmissionSchema = new Schema({
  artistId: { type: String, required: true },
  gigId: { type: String, required: true },
  status: { type: String, required: true }, // should be one of 'pending', 'accepted' or 'declined'
})

const Submission = models.Submission || model('Submission', SubmissionSchema)

export default Submission
