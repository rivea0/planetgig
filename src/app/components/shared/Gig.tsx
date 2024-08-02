import type { GigType } from '@/types'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import { Button } from '../ui/button'
import { handleSubmission } from '@/lib/actions/user.action'
import { User } from '@clerk/nextjs/server'

export default function Gig({ gig, user }: {gig: GigType, user: User | null}) {
  let handleSubmissionWithIds
  if (user) {
    handleSubmissionWithIds = handleSubmission.bind(null, {gigId: gig._id, userId: user!.id})
  }
  return (
    // {gigsList.map(gig => {
        <form action={handleSubmissionWithIds}>
        <Card className='bg-coffee-300 border-gray-300'>
        <CardHeader>
          {gig.imageUrl && <Image src={gig.imageUrl} alt="gig image" width={400} height={200} />}
          <CardTitle className="font-normal">{`${gig.venue}, ${gig.location}`}</CardTitle>
          <CardDescription className='text-md'>{gig.gigType}</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-center gap-2'>
          <p className='font-semibold'>{new Date(gig.date).toLocaleDateString()}</p>
          <Button type="submit" className="text-center">Apply</Button>
        </CardContent>
        <CardFooter>
          <p className='text-lg'>{`${gig.pay}$`}</p>
        </CardFooter>
      </Card>  
      </form>
      // }
      )
    }
