'use client'

import { useRef } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Hero() {
  const gigsRef = useRef<HTMLHeadingElement | null>(null)

  return (
    <>
      <section className="flex flex-col h-screen items-center gap-8">
        <h1 className="text-gray-800 text-5xl text-center font-semibold mt-16">
          Find your next opportunity
        </h1>
        <Button
          className="button w-min text-lg"
          asChild
          size="lg"
          onClick={() => {
            gigsRef.current!.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }}
        >
          <span className="cursor-pointer">Explore gigs</span>
        </Button>
        <div className="mt-36 text-center">
          <span className="text-sm text-coffee-400">Or</span>
          <p className="mt-2 hover:underline">
            <Link
              href="/artists"
              className="text-coffee-100 text-md font-semibold"
            >
              Explore artists
            </Link>
          </p>
        </div>
      </section>
      <h1 ref={gigsRef} className="text-xl text-center py-8">
        Available gigs
      </h1>
    </>
  )
}
