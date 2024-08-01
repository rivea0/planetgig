'use server'

import type { ArtistType, ArtistUpdateValues } from '@/types'
import Artist from '../database/models/artist.model'
import { connectToDatabase } from '../database'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Create new Artist in the db, triggered from Clerk
export async function createUser(user: ArtistType) {
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
  const user = await currentUser()

  return user
}

export async function getArtistByClerkId(clerkId: string): Promise<ArtistType | undefined>  {
  try {
    await connectToDatabase()
    const artist = await Artist.findOne({ clerkId: clerkId })
    return artist
  } catch (err) {
    console.error(err)
  }
}

// Get artist from db with clerk id
// (for the signed-in user)
export async function getArtistByUsername(
  username: string
): Promise<ArtistType | undefined> {
  try {
    await connectToDatabase()
    const artist = await Artist.findOne({ username: username })
    return artist
  } catch (err) {
    console.error(err)
  }
}

export async function getAllUsers(): Promise<ArtistType[] | []> {
  let users = []
  try {
    await connectToDatabase()
    users = await Artist.find({})
  } catch (err) {
    console.error(err)
  }

  return users
}

export async function updateUser(
  clerkId: string,
  user: { firstName: string | null; lastName: string | null; username: string; photo: string }
) {
  try {
    await connectToDatabase()

    const updatedUser = await Artist.findOneAndUpdate({ clerkId }, user, {
      new: true,
    })

    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    console.error(error)
  }
}

export async function updateArtist(clerkId: string, artistWithNewValues: ArtistUpdateValues) {
  try {
    await connectToDatabase()

    const updatedUser = await Artist.findOneAndUpdate({ clerkId }, artistWithNewValues, {
      new: true,
    })

    if (!updatedUser) throw new Error('Artist update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    console.error(error)
  }

}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase()
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

// export async function updateArtist({ userId, values, path }) {
//   try {
//     await connectToDatabase()

//     const artistToUpdate = await Artist.findById({ clerkId: userId })
//     if (!artistToUpdate) {
//       throw new Error('Artist not found')
//     }

//     const updatedArtist = await Artist.findByIdAndUpdate(
//       { clerkId: userId },
//       { ...values },
//       { new: true }
//     )
//     revalidatePath(path)

//     return JSON.parse(JSON.stringify(updatedArtist))
//   } catch (error) {
//     console.error(error)
//   }
// }