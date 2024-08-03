'use server'

import { reviewSchema } from '../validate'
import type {
  ArtistType,
  GigType,
  SocialLinksType,
  SubmissionType,
} from '@/types'
import Artist from '../database/models/artist.model'
import { connectToDatabase } from '../database'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Submission from '../database/models/submission.model'
import Review from '../database/models/review.model'
import Gig from '../database/models/gig.model'

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

export async function handleSubmission(
  { gigId, userId }: { gigId: string; userId: string },
  formData: FormData
) {
  try {
    await connectToDatabase()
    const artist = await Artist.findOne({ clerkId: userId })
    const existingSubmission = await Submission.find({
      artistId: artist._id,
      gigId: gigId,
    })
    if (existingSubmission.length) {
      return
    }
    const newSubmission = await Submission.create({
      gigId: gigId,
      artistId: artist._id,
      status: 'pending',
    })

    if (!newSubmission) throw new Error('Submission failed')
    revalidatePath(`/submissions`)
    // return JSON.parse(JSON.stringify(newSubmission))
  } catch (error) {
    console.error(error)
  }

  redirect('/submissions')
}

export async function handleRevokeSubmission(
  { gigId, artistId }: { gigId: string; artistId: string },
  formData: FormData
) {
  try {
    await connectToDatabase()
    const existingSubmission = await Submission.findOne({
      artistId: artistId,
      gigId: gigId,
    })

    await Submission.findByIdAndDelete(existingSubmission._id)
    revalidatePath(`/submissions`)
    // return JSON.parse(JSON.stringify(newSubmission))
  } catch (error) {
    console.error(error)
  }

  redirect('/submissions')
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
  const artist = await getArtistByClerkId(userId)
  const links = artist?.socialLinks as SocialLinksType & Map<string, string>

  const artistWithNewValues = {
    bio: formData.get('bio') || artist!.bio,
    nameToDisplay: formData.get('nameToDisplay'),
    socialLinks: {
      website: formData.get('website') || links.get('website'),
      spotify: formData.get('spotify') || links.get('spotify'),
      'twitter-x': formData.get('twitter-x') || links.get('twitter-x'),
      facebook: formData.get('facebook') || links.get('facebook'),
      youtube: formData.get('youtube') || links.get('youtube'),
      instagram: formData.get('instagram') || links.get('instagram'),
      bandcamp: formData.get('bandcamp') || links.get('bandcamp'),
      soundcloud: formData.get('soundcloud') || links.get('soundcloud'),
    },
    genres: [
      formData.get('genre1') || artist!.genres![0],
      formData.get('genre2') || artist!.genres![1],
      formData.get('genre3') || artist!.genres![2],
      formData.get('genre4') || artist!.genres![3],
    ],
    images: [
      formData.get('image1') || artist!.images![0],
      formData.get('image2') || artist!.images![1],
      formData.get('image3') || artist!.images![2],
      formData.get('image4') || artist!.images![3],
      formData.get('image5') || artist!.images![4],
      formData.get('image6') || artist!.images![5],
    ],
    videos: [
      formData.get('video1') || artist!.videos![0],
      formData.get('video2') || artist!.videos![1],
      formData.get('video3') || artist!.videos![2],
      formData.get('video4') || artist!.videos![3],
      formData.get('video5') || artist!.videos![4],
      formData.get('video6') || artist!.videos![5],
    ],
  }

  console.log(artistWithNewValues)

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

export async function handleReviewSubmission(
  { fromId, toId }: { fromId: string; toId: string },
  formData: FormData
) {
  try {
    await connectToDatabase()
    const artistToReview = await Artist.findOne({ clerkId: toId })
    const artistWhoReviewed = await Artist.findOne({ clerkId: fromId })
    const { content } = reviewSchema.parse({
      content: formData.get('review'),
    })
    const newReview = await Review.create({
      fromId: artistWhoReviewed._id,
      toId: artistToReview._id,
      content: content,
    })

    if (!newReview) throw new Error('Review submission failed')
    revalidatePath(`/profile/${artistToReview.username}`)
    return JSON.parse(JSON.stringify(newReview))
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

/* Utils */
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

export async function getArtistById(id: string): Promise<ArtistType> {
  let artist
  try {
    await connectToDatabase()
    artist = await Artist.findOne({ _id: id })
  } catch (err) {
    console.error(err)
  }

  return JSON.parse(JSON.stringify(artist))
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
    gig = await Gig.findOne({ _id: gigId })
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

export async function getArtistReviews(userId: string) {
  let reviews = []
  try {
    await connectToDatabase()
    reviews = await Review.find({ toId: userId })
    return JSON.parse(JSON.stringify(reviews))
  } catch (error) {
    console.error(error)
  }
}
