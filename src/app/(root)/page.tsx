import Gig from '@/app/components/shared/Gig'
import Hero from '../components/shared/Hero'
import { getCurrentUser } from '@/lib/actions/user.action'
import { getAllGigs } from '@/lib/actions/user.action'

export default async function Home() {
  const gigs = await getAllGigs()
  let user = null
  try {
    user = await getCurrentUser()
  } catch (err) {
    console.error(err)
  }

  return !user ? (
    <div className="flex flex-col w-full p-4">
      <Hero />
      <section
        id="gigs"
        className="grid py-1 px-12 md:grid-cols-3 gap-8 md:gap-12 mt-4"
      >
        {gigs.map((gig) => {
          return <Gig key={gig._id} gig={gig} user={user} />
        })}
      </section>
    </div>
  ) : (
    <div className="flex flex-col w-full bg-coffee-50 p-4">
      <h1 className="text-xl text-center py-8">Available gigs</h1>
      <section
        id="gigs"
        className="grid py-1 px-12 md:grid-cols-3 gap-8 md:gap-12 mt-4 auto-rows-fr"
      >
        {gigs.map((gig) => {
          return <Gig key={gig._id} gig={gig} user={user} />
        })}
      </section>
    </div>
  )
}
