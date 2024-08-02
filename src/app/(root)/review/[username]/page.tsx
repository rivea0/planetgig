import {
  getCurrentUser,
  handleReviewSubmission,
} from '@/lib/actions/user.action'
import { getArtistByUsername, getAllUsers } from '@/lib/actions/user.action'
import { Textarea } from '@/app/components/ui/textarea'
import { Toaster } from '@/app/components/ui/sonner'
import { Label } from '@radix-ui/react-label'
import ReviewButton from '@/app/components/shared/ReviewButton'
import { Button } from '@/app/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const users = await getAllUsers()

  return users.map((user) => ({
    username: user.username,
  }))
}

export default async function ReviewPage({
  params,
}: {
  params: { username: string }
}) {
  const artist = await getArtistByUsername(params.username)
  let user
  try {
    user = await getCurrentUser()
  } catch (err) {
    console.error(err)
  }

  if (artist && user && user.id === artist.clerkId) {
    return (
      <div className="flex justify-center text-lg bg-coffee-50 min-h-screen md:p-12">
        You can only review other artists!
      </div>
    )
  }

  if (artist && user) {
    const handleReviewSubmissionWithIds = handleReviewSubmission.bind(null, {
      fromId: user.id,
      toId: artist.clerkId,
    })
    return (
      <div className="bg-coffee-50 min-h-screen md:p-12 p-4">
        <form
          action={handleReviewSubmissionWithIds}
          className="flex flex-col items-center gap-4"
        >
          <Label
            htmlFor="review"
            className="text-2xl"
          >{`Review ${artist?.nameToDisplay}`}</Label>
          <Textarea
            placeholder="Enter review"
            name="review"
            id="review"
            className="bg-coffee-100 max-w-xl"
            rows={5}
          />
          <ReviewButton />
        </form>
        <Toaster className="bg-emerald-300 text-zinc-800" />
        <div className="flex flex-col items-center mt-8">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <Link href={`/profile/${artist.username}`}>
              Go back to artist's page
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}
