import { model, models, Schema } from 'mongoose'

const OrganizerSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const Organizer = models.Organizer || model('Organizer', OrganizerSchema)

export default Organizer
