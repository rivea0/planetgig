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
  genre?: string[]
  nameToDisplay: string
  submissions: string[]
  socialLinks: SocialLinks
  reviews: string[]
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

}