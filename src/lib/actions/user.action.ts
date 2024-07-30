'use server'

import Artist from '../database/models/artist.model'
import { connectToDatabase } from '../database'

// Create new Artist in the db, triggered from Clerk
export async function createUser(user: any) {
  try {
    await connectToDatabase()
    const newArtist = await Artist.create(user)
    return JSON.parse(JSON.stringify(newArtist))
  } catch (err) {
    console.error(err)
  }
}
