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
        ><span className='cursor-pointer'>Explore gigs</span>
        </Button>
      </section>
      <h1 ref={gigsRef} className="text-xl text-center py-8">
        Available gigs
      </h1>
    </>
  )
}
