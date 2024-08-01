import Link from 'next/link'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
// import { currentUser } from '@clerk/nextjs/server'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import NavItems from './NavItems'
import { getCurrentUser } from '@/lib/actions/user.action'

export default async function Header({ isAuth, username }: { isAuth: boolean, username?: string | null }) {
  // const user = await currentUser();

  return (
    <header className="w-full">
      <div className="max-w-7xl lg:mx-auto p-5 md:p-5 xl:px-2 w-full flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/PlanetGigLogo.png" alt="Logo" width={265} height={64} />
        </Link>

        <nav className="md:flex md:justify-center md:items-center hidden w-full">
          <NavItems isAuth={isAuth} username={username} />
        </nav>

        <div className="flex w-32 justify-end items-center gap-4">
          {!isAuth ? (
            <Button className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          ) : (
            <UserButton />
          )}
          <MobileNav isAuth={isAuth} />
        </div>
      </div>
    </header>
  )
}
