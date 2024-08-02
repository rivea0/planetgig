import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/app/components/ui/card'
import {
  handleRevokeSubmission,
  getArtistByClerkId,
  getArtistSubmissions,
  getGigById,
} from '@/lib/actions/user.action'
import { SubmissionType } from '@/types'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'

export default async function Submissions() {
  let user = null
  let artist
  let submissions: (SubmissionType & { _id: string })[] = []
  try {
    user = await currentUser()
  } catch (err) {
    console.error(err)
  }
  if (user) {
    artist = await getArtistByClerkId(user.id)
    //@ts-ignore
    submissions = await getArtistSubmissions(artist!._id)
  }

  return user && artist ? (
    <div className="py-8 bg-coffee-50 min-h-screen">
      <h1 className="text-center text-xl mb-4">All submissions</h1>
      <div className="grid md:grid-cols-3 gap-8 justify-items-center px-8">
        {submissions.map(async (s) => {
          const gig = await getGigById(s.gigId)
          return (
            gig && (
              <div
                key={s._id}
                className="bg-coffee-200 p-2 rounded-md border-orange-300 flex flex-col items-center"
              >
                <Card className="p-2 bg-coffee-200">
                  <CardHeader>
                    {gig.imageUrl && (
                      <Image
                        src={gig.imageUrl}
                        alt="gig image"
                        width={400}
                        height={200}
                      />
                    )}
                    <CardTitle className="font-normal">{`${gig.venue}, ${gig.location}`}</CardTitle>
                  </CardHeader>
                  <CardDescription className="flex flex-col items-center gap-2">
                    <p className="text-lg">
                      {new Date(gig.date).toLocaleDateString()}
                    </p>
                    <p className="text-lg">{`Status: ${s.status}`}</p>
                  </CardDescription>
                </Card>
                <form
                  action={handleRevokeSubmission.bind(null, {
                    gigId: JSON.parse(JSON.stringify(gig._id)),
                    artistId: JSON.parse(JSON.stringify(artist._id)),
                  })}
                >
                  <Button
                    type="submit"
                    variant="destructive"
                    className="self-center"
                  >
                    Revoke
                  </Button>
                </form>
              </div>
            )
          )
        })}
      </div>
    </div>
  ) : (
    <div></div>
  )
}
