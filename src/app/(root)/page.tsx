import Gig from '@/app/components/shared/Gig'
import Hero from '../components/shared/Hero'
import { getAllGigs, getCurrentUser } from '@/lib/actions/user.action'

export default async function Home() {
  const gigs = await getAllGigs()
  let user = null
  try {
    user = await getCurrentUser()
  } catch (err) {
    console.error(err)
  }

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <section
        id="gigs"
        className="grid py-1 px-12 md:grid-cols-3 gap-8 md:gap-12 mt-4 bg-coffee-50"
      >
        {gigs.map((gig) => {
          return <Gig key={gig._id} gig={gig} user={user} />
        })}
      </section>
    </div>
  )
}
