import {
  getAllUsers,
  getArtistByUsername,
  getCurrentUser,
} from '@/lib/actions/user.action'
import ArtistOverview from '@/app/components/shared/ArtistOverview'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs'
import ArtistHeader from '@/app/components/shared/ArtistHeader'
import ArtistReviews from '@/app/components/shared/ArtistReviews'
import { ArtistType } from '@/types'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

export async function generateStaticParams() {
  const users = await getAllUsers()

  return users.map((user) => ({
    username: user.username,
  }))
}

export default async function Profile({
  params,
}: {
  params: { username: string }
}) {
  let user
  try {
    user = await getCurrentUser()
  } catch (err) {
    user = null
  }

  const artist = (await getArtistByUsername(params.username)) as ArtistType & {
    _id: string
  }
  const isOwnPage = user?.username === artist?.username

  if (artist) {
    return (
      artist && (
        <div className="bg-coffee-50 flex flex-col min-h-screen">
          <ArtistHeader
            artist={JSON.parse(JSON.stringify(artist))}
            isOwnPage={isOwnPage}
          />
          <div className="flex justify-center items-center gap-4 py-8">
            <Tabs defaultValue="overview" className="w-full flex flex-col">
              <TabsList className="self-center">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews" className="ml-4">
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="w-full">
                <ArtistOverview
                  artist={JSON.parse(JSON.stringify(artist))}
                  isOwnPage={isOwnPage}
                />
              </TabsContent>
              <TabsContent value="reviews">
                <ArtistReviews artistId={artist._id} />
              </TabsContent>
            </Tabs>
          </div>
          {!isOwnPage && (
            <Button type="button" className="self-center mb-3">
              <Link href={`/review/${artist.username}`}>
                Add review to artist
              </Link>
            </Button>
          )}
        </div>
      )
    )
  }

  return <div>This artist does not exist!</div>
}
