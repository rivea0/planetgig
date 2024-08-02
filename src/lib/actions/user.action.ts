'use server'

import type { ArtistType, GigType, SubmissionType } from '@/types'
import Artist from '../database/models/artist.model'
import { connectToDatabase } from '../database'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Gig from '../database/models/gig.model'
import Submission from '../database/models/submission.model'

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

export async function getArtistByClerkId(
  clerkId: string
): Promise<ArtistType | undefined> {
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

export async function getAllGigs(): Promise<GigType[]> {
  let gigs = []
  try {
    await connectToDatabase()
    gigs = await Gig.find({})
  } catch (err) {
    console.error(err)
  }

  return JSON.parse(JSON.stringify(gigs))
}

export async function handleSubmission(
  { gigId, userId }: { gigId: string; userId: string },
  formData: FormData
) {
  try {
    await connectToDatabase()
    const artist = await Artist.findOne({ clerkId: userId })
    const newSubmission = await Submission.create({
      gigId: gigId,
      artistId: artist._id,
      status: 'pending',
    })

    if (!newSubmission) throw new Error('Submission failed')
    revalidatePath(`/submissions`)
    return JSON.parse(JSON.stringify(newSubmission))
  } catch (error) {
    console.error(error)
  }

  redirect('submissions')
}

export async function getArtistSubmissions(
  userId: string
): Promise<(SubmissionType & { _id: string })[]> {
  let submissions = []
  try {
    await connectToDatabase()
    submissions = await Submission.find({ artistId: userId })
  } catch (err) {
    console.error(err)
  }

  return submissions
}

export async function getGigById(
  gigId: string
): Promise<(GigType & { _id: string }) | null> {
  let gig = null
  try {
    await connectToDatabase()
    gig = await Gig.findOne({ id: gigId })
  } catch (err) {
    console.error(err)
  }

  return gig
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
  user: {
    firstName: string | null
    lastName: string | null
    username: string
    photo: string
  }
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

export async function updateArtist(userId: string, formData: FormData) {
  const artistWithNewValues = {
    bio: formData.get('bio'),
    nameToDisplay: formData.get('nameToDisplay'),
    socialLinks: {
      website: formData.get('website'),
      spotify: formData.get('spotify'),
      'twitter-x': formData.get('twitter-x'),
      facebook: formData.get('facebook'),
      youtube: formData.get('youtube'),
      instagram: formData.get('instagram'),
      bandcamp: formData.get('bandcamp'),
      soundcloud: formData.get('soundcloud'),
    },
    genres: [
      formData.get('genre1'),
      formData.get('genre2'),
      formData.get('genre3'),
      formData.get('genre4'),
    ],
    images: [
      formData.get('image1'),
      formData.get('image2'),
      formData.get('image3'),
      formData.get('image4'),
      formData.get('image5'),
      formData.get('image6'),
    ],
    videos: [
      formData.get('video1'),
      formData.get('video2'),
      formData.get('video3'),
      formData.get('video4'),
      formData.get('video5'),
      formData.get('video6'),
    ],
  }

  const { username } = (await getArtistByClerkId(userId)) as ArtistType
  try {
    await connectToDatabase()

    const updatedArtist = await Artist.findOneAndUpdate(
      { clerkId: userId },
      artistWithNewValues,
      { new: true }
    )

    if (!updatedArtist) throw new Error('Artist update failed')
    revalidatePath(`/profile/${username}`)
    //return JSON.parse(JSON.stringify(updatedArtist))
  } catch (error) {
    console.error(error)
  }
  redirect(`/profile/${username}`)
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
