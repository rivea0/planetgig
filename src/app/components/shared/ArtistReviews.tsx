import { getArtistById, getArtistReviews } from '@/lib/actions/user.action'
import { ReviewType } from '@/types'
import { Card, CardContent, CardFooter } from '../ui/card'

export default async function ArtistReviews({
  artistId,
}: {
  artistId: string
}) {
  const reviews = await getArtistReviews(artistId)
  if (!reviews.length) {
    return (
      <div className="flex justify-center mt-4 text-lg">
        This artist has no reviews yet!
      </div>
    )
  }

  return (
    <div>
      <ul
        className={`grid ${
          reviews.length > 1 ? 'md:grid-cols-2' : ''
        } md:px-36 px-4 py-2 gap-4`}
      >
        {reviews.map(async (review: ReviewType & { _id: string }) => {
          const reviewAuthor = await getArtistById(review.fromId)
          return (
            <li key={review._id}>
              <Card className="p-4 bg-coffee-100">
                <CardContent className="italic">"{review.content}"</CardContent>
                <CardFooter className="text-zinc-500">{`by ${
                  reviewAuthor.nameToDisplay || reviewAuthor.username
                }`}</CardFooter>
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
