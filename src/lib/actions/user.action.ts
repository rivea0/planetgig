'use server'

import type { ArtistType } from '@/types'
import Artist from '../database/models/artist.model'
import { connectToDatabase } from '../database'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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

// Clerk
export async function getCurrentUser() {
  const user = await currentUser();

  return user;
}

// Get artist from db with clerk id
// (for the signed-in user)
export async function getArtist(username: string): Promise<ArtistType | undefined> {
  try {
    await connectToDatabase()
    const artist = await Artist.find({ username: username })
    return artist[0]
  } catch (err) {
    console.error(err)
  }
}

export async function getAllUsers() {
  try {
    await connectToDatabase()
    const users = await Artist.find({})
    return users
  } catch (err) {
    console.error(err)
  }
}

// export async function updateUser(clerkId: string, user) {
//   try {
//     await connectToDatabase()

//     const updatedUser = await Artist.findOneAndUpdate({ clerkId }, user, { new: true })

//     if (!updatedUser) throw new Error('User update failed')
//     return JSON.parse(JSON.stringify(updatedUser))
//   } catch (error) {
//     console.error(error)
//   }
// }

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase()

    // Find user to delete
    const artistToDelete = await Artist.findOne({ clerkId })

    if (!artistToDelete) {
      throw new Error('User not found')
    }

    // TODO Unlink relationships

    // Delete user
    await Artist.findByIdAndDelete(artistToDelete._id)
    revalidatePath('/')
    redirect('/')

    // return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    console.error(error)
  }
}