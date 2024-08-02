// type Links =
//   | 'website'
//   | 'spotify'
//   | 'twitter'
//   | 'facebook'
//   | 'youtube'
//   | 'instagram'
//   | 'bandcamp'
//   | 'soundcloud'

export type ArtistType = {
  clerkId: string
  email: string
  username: string
  firstName: string | null
  lastName: string | null
  photo: string
  genres?: string[]
  nameToDisplay: string
  submissions: string[]
  socialLinks: SocialLinks
  reviews: string[],
  images?: string[],
  videos?: string[]
}

export type SocialLinks = {
  website: string
  spotify: string
  'twitter-x': string
  facebook: string
  youtube: string
  instagram: string
  bandcamp: string
  soundcloud: string
}

export type ArtistUpdateValues = {
  nameToDisplay?: string,
  bio?: string,
  website?: string,
  spotify?: string,
  'twitter-x'?: string,
  facebook?: string,
  instagram?: string,
  youtube?: string,
  bandcamp?: string,
  soundcloud?: string,
  genre1?: string,
  genre2?: string,
  genre3?: string,
  genre4?: string,
  image1?: string,
  image2?: string,
  image3?: string,
  image4?: string,
  image5?: string,
  image6?: string,
  video1?: string,
  video2?: string,
  video3?: string,
  video4?: string,
  video5?: string,
  video6?: string,
 
}

export type GigType = {
  _id: string,
  venue: string,
  location: string,
  pay?: string,
  gigType: string,
  genre?: string,
  date: Date,
  imageUrl?: string,
}

export type SubmissionType = {
  fromId: string,
  toId: string,
  status: 'pending' | 'accepted' | 'declined'
}