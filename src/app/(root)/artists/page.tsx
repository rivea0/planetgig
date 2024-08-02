import { getAllUsers } from '@/lib/actions/user.action'
import ArtistCard from '@/app/components/shared/ArtistCard'

export default async function ArtistsPage() {
  const artists = await getAllUsers()
  return (
    <div className="bg-coffee-50 p-8 min-h-screen">
      <h1 className="text-center text-2xl mb-8">All artists</h1>
      <ul className={`md:grid md:grid-cols-3 gap-5`}>
        {artists.map((artist) => (
          <li key={artist.clerkId} className="flex">
            <ArtistCard
              photo={artist.photo}
              nameToDisplay={artist.nameToDisplay}
              bio={artist.bio}
              genres={artist.genres?.filter((g) => g !== '') || []}
              username={artist.username}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
