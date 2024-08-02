import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/app/components/ui/card'
import {
  getArtistByClerkId,
  getArtistSubmissions,
  getGigById,
} from '@/lib/actions/user.action'
import { SubmissionType } from '@/types'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'

export default async function Submissions() {
  let user = null
  let submissions: (SubmissionType & { _id: string })[] = []
  try {
    user = await currentUser()
  } catch (err) {
    console.error(err)
  }
  if (user) {
    const artist = await getArtistByClerkId(user.id)
    //@ts-ignore
    submissions = await getArtistSubmissions(artist!._id)
  }

  return user ? (
    <div className='py-8 bg-coffee-200 h-screen'>
      <h1 className="text-center text-xl">All submissions</h1>
      <div className="grid md:grid-cols-3 gap-8 justify-items-center px-8">
        {submissions.map(async (s) => {
          const gig = await getGigById(s.fromId)
          return (
            gig && (
              <Card key={s._id} className="bg-gray border-orange-300 p-2">
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
                <CardDescription>
                  <p className="text-lg">
                    {new Date(gig.date).toLocaleDateString()}
                  </p>
                  <p className="text-lg">{`Status: ${s.status}`}</p>
                </CardDescription>
              </Card>
            )
          )
        })}
      </div>
    </div>
  ) : (
    <div></div>
  )
}
