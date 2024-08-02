import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import Link from 'next/link'
import SocialLinks from './SocialLinks'
import { ArtistType, SocialLinksType } from '@/types'

export default function ArtistHeader({
  artist,
  isOwnPage,
}: {
  artist: ArtistType
  isOwnPage: boolean
}) {
  return (
    <>
      <div className="flex justify-center items-center gap-4 py-8">
        <Image
          src={artist.photo}
          alt="Artist image"
          width={150}
          height={150}
          className="rounded-md"
        />
        <h1 className="text-4xl self-center">
          {artist.nameToDisplay || artist.username}
        </h1>
        {isOwnPage && (
          <span className="self-start max-w-sm ml-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="/profile/edit" className="text-muted-foreground ">
                    <Image
                      src="/icons/settings.svg"
                      alt="settings icon"
                      width={18}
                      height={18}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        )}
      </div>
      {artist.genres && (
        <div className="mb-4 flex justify-center gap-2">
          {artist.genres.map(
            (genre) =>
              genre &&
              genre !== '' && (
                <span key={genre} className="bg-zinc-200 px-2 py-1 rounded-md">
                  {genre}
                </span>
              )
          )}
        </div>
      )}
      <SocialLinks urls={artist.socialLinks as SocialLinksType} />
    </>
  )
}
