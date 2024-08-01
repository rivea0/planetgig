export default async function SpotifyWidget({
  spotifyId,
}: {
  spotifyId: string
}) {
  return (
    <div className="flex-1">
      <iframe
        src={`https://open.spotify.com/embed/artist/${spotifyId}`}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; 
    picture-in-picture"
        loading="lazy"
        frameBorder={0}
      />
    </div>
  )
}
