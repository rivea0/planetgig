'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItems({ isAuth, username }: { isAuth: boolean, username?: string | null }) {
  const pathname = usePathname()

  return (
    <div>
      <ul className="flex flex-col items-start text-lg md:items-center md:justify-center w-full gap-16 md:flex-row">
        {isAuth && (
          <>
            <li className={pathname === '/#gigs' ? 'text-blue-300 bg-blue-500' : ''}><Link href="/#gigs">Search for gigs</Link></li>
            <li className={pathname === 'submissions' ? 'text-blue-300 bg-blue-500' : ''}><Link href="/submissions">My submissions</Link></li>
            <li className={pathname === `/profile/${username}` ? 'underline' : ''}><Link href={`/profile/${username}`}>Profile</Link></li>
          </>
        )}
      </ul>
    </div>
  )
}
