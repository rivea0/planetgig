'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItems({ isAuth }: { isAuth: boolean }) {
  const pathname = usePathname()

  return (
    <div>
      <ul className="flex flex-col items-start md:items-center md:justify-center w-full gap-8 md:flex-row">
        {isAuth && (
          <>
            <li className={pathname === 'gigs' ? 'text-blue-300' : ''}><Link href="/gigs">Search for gigs</Link></li>
            <li className={pathname === 'submissions' ? 'text-blue-300' : ''}><Link href="/submissions">My submissions</Link></li>
            <li className={pathname === 'profile' ? 'text-blue-300' : ''}><Link href="/profile">Profile</Link></li>
          </>
        )}
      </ul>
    </div>
  )
}
