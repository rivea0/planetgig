'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavItems({
  isAuth,
  username,
}: {
  isAuth: boolean
  username?: string | null
}) {
  const pathname = usePathname()

  return (
    <div>
      <ul
        className={`flex flex-col items-start text-lg md:items-center md:justify-center w-full gap-16 md:flex-row ${
          isAuth ? 'text-zinc-700' : 'text-coffee-50'
        }`}
      >
        {isAuth && (
          <>
            <li
              className={
                pathname === '/'
                  ? 'text-coffee-600 underline'
                  : 'hover:text-coffee-600'
              }
            >
              <Link href="/">Search for gigs</Link>
            </li>
            <li
              className={
                pathname === '/artists'
                  ? 'text-coffee-600 underline'
                  : 'hover:text-coffee-600'
              }
            >
              <Link href="/artists">Explore artists</Link>
            </li>
            <li
              className={
                pathname === '/submissions'
                  ? 'text-coffee-600 underline'
                  : 'hover:text-coffee-600'
              }
            >
              <Link href="/submissions">My submissions</Link>
            </li>
            <li
              className={
                pathname === `/profile/${username}`
                  ? 'text-coffee-600 underline'
                  : 'hover:text-coffee-600'
              }
            >
              <Link href={`/profile/${username}`}>Profile</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
