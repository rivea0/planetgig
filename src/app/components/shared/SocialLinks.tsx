import { SocialLinksType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialLinks({ urls }: { urls: SocialLinksType }) {
  return (
    <div className="flex justify-center gap-8">
      {urls.website && (
        <Link href={urls.website}>
          <Image
            src="/icons/website.svg"
            alt="website"
            width={24}
            height={24}
          />
        </Link>
      )}
      {urls['twitter-x'] && (
        <Link href={urls['twitter-x']}>
          <Image
            src="/icons/twitter-x.svg"
            alt="twitter-x"
            width={24}
            height={24}
          />
        </Link>
      )}

      {urls.facebook && (
        <Link href={urls.facebook}>
          <Image
            src="/icons/facebook.svg"
            alt="facebook"
            width={24}
            height={24}
          />
        </Link>
      )}
      {urls.spotify && (
        <Link href={urls.spotify}>
          <Image
            src="/icons/spotify.svg"
            alt="spotify"
            width={24}
            height={24}
          />
        </Link>
      )}
      {urls.youtube && (
        <Link href={urls.youtube}>
          <Image
            src="/icons/youtube.svg"
            alt="youtube"
            width={24}
            height={24}
          />
        </Link>
      )}

      {urls.instagram && (
        <Link href={urls.instagram}>
          <Image
            src="/icons/instagram.svg"
            alt="instagram"
            width={24}
            height={24}
          />
        </Link>
      )}

      {urls.bandcamp && (
        <Link href={urls.bandcamp}>
          <Image
            src="/icons/bandcamp.svg"
            alt="bandcamp"
            width={24}
            height={24}
          />
        </Link>
      )}

      {urls.soundcloud && (
        <Link href={urls.soundcloud}>
          <Image
            src="/icons/soundcloud.svg"
            alt="soundcloud"
            width={24}
            height={24}
          />
        </Link>
      )}
    </div>
  )
}
