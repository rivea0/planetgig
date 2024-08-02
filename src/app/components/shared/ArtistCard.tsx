import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/app/components/ui/card'

export default function ArtistCard({
  photo,
  nameToDisplay,
  bio,
  genres,
  username,
}: {
  photo: string
  nameToDisplay: string
  bio: string
  genres: string[]
  username: string
}) {
  return (
    <Card className="border-2 hover:border-zinc-600 overflow-hidden hover:cursor-pointer border-zinc-400 bg-coffee-200 md:px-4 py-2 grid gap-5">
      <Link href={`/profile/${username}`} className="grid">
        <CardHeader className="min-h-52 flex">
          <Image src={photo} alt="Artist photo" width={200} height={200} />
          <h1>{nameToDisplay || username}</h1>
        </CardHeader>
        <CardContent className="grid auto-rows-fr gap-1 flex-1">
          <p className="text-zinc-500 text-sm">{`${bio.slice(0, 100)}${
            bio.length > 100 ? '...' : ''
          }`}</p>
          <ul className="mt-2 flex gap-3">
            {genres.map((genre) => {
              return genre && genre !== '' ? (
                <li key={genre}>
                  <span className="bg-zinc-300 px-2 py-1 rounded-md">
                    {genre}
                  </span>
                </li>
              ) : null
            })}
          </ul>
        </CardContent>
      </Link>
      <Link
        href={`/review/${username}`}
        className="self-center justify-self-center mt-auto text-md rounded-md bg-coffee-300 hover:bg-coffee-400 px-2 py-1 align-end max-w-fit"
      >
        Review artist
      </Link>
    </Card>
  )
}
