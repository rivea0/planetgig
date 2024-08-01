
type Links = 'website' | 'spotify' | 'twitter' | 'facebook' | 'youtube' | 'bandcamp' | 'soundcloud'

export type ArtistType = {
  _id: string,
  clerkId: string,
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  photo: string,
  genre?: string,
  submissions: string[],
  socialLinks: Map<Links, string>
}
