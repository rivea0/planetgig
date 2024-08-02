import { ArtistType } from '@/types'
import Bio from './Bio'
import SpotifyWidget from './SpotifyWidget'
import Images from './Images'
import Videos from './Videos'

export default function ArtistOverview({
  artist,
  isOwnPage,
}: {
  artist: ArtistType
  isOwnPage: boolean
}) {
  function getVideoId(url: string) {
    if (url.includes('v=')) {
      return url.slice(url.indexOf('v=') + 2)
    } else if (url.includes('youtu.be')) {
      if (url.includes('?')) {
        return url.slice(url.indexOf('youtu.be/') + 9, url.indexOf('?'))
      } else {
        return url.slice(url.indexOf('youtu.be/') + 9)
      }
    }

    return ''
  }
  const videoIds = artist.videos
    ?.map((videoUrl) => (!videoUrl ? '' : getVideoId(videoUrl)))
    .filter((v) => v !== '')

  const artistSpotifyLink = artist.socialLinks.spotify
  let spotifyId
  if (artistSpotifyLink) {
    spotifyId = artistSpotifyLink.slice(
      artistSpotifyLink.indexOf('artist/') + 7
    )

    return (
      <>
        <div className="flex px-8 mt-12 justify-center flex-col md:flex-row">
          {artist.bio && <Bio text={artist.bio} />}
          {spotifyId && <SpotifyWidget spotifyId={spotifyId} />}
        </div>
        {artist.images && <Images imageList={artist.images} />}
        {videoIds?.length ? (
          <div className="flex justify-center flex-wrap px-1">
            <Videos videoIds={videoIds} />
          </div>
        ) : null}
      </>
    )
  }
}
