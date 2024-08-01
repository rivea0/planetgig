import Image from 'next/image'
import Link from 'next/link'

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-8">
      <Link href="/">
        <Image src="/icons/website.svg" alt="website" width={24} height={24} />
      </Link>
      <Link href="">
        <Image
          src="/icons/twitter-x.svg"
          alt="twitter-x"
          width={24}
          height={24}
        />
      </Link>
      <Link href="">
        <Image
          src="/icons/facebook.svg"
          alt="facebook"
          width={24}
          height={24}
        />
      </Link>
      <Link href="">
        <Image src="/icons/spotify.svg" alt="spotify" width={24} height={24} />
      </Link>
      <Link href="">
        <Image src="/icons/youtube.svg" alt="youtube" width={24} height={24} />
      </Link>
      <Link href="">
        <Image
          src="/icons/instagram.svg"
          alt="instagram"
          width={24}
          height={24}
        />
      </Link>
      <Link href="">
        <Image
          src="/icons/bandcamp.svg"
          alt="bandcamp"
          width={24}
          height={24}
        />
      </Link>
      <Link href="">
        <Image
          src="/icons/soundcloud.svg"
          alt="soundcloud"
          width={24}
          height={24}
        />
      </Link>
    </div>
  )
}
