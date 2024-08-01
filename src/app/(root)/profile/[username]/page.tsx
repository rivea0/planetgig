import Image from 'next/image'
import Link from 'next/link'
import {
  getAllUsers,
  getArtist,
  getCurrentUser,
} from '@/lib/actions/user.action'
import Bio from '@/app/components/shared/Bio'
import SpotifyWidget from '@/app/components/shared/SpotifyWidget'
import SocialLinks from '@/app/components/shared/SocialLinks'

export async function generateStaticParams() {
  const users = await getAllUsers()

  return users.map((user) => ({
    username: user.username,
  }))
}

export default async function Profile({
  params,
}: {
  params: { username: string }
}) {
  let user
  try {
    user = await getCurrentUser()
  } catch(err) {
    user = null
  }
  const artist = await getArtist(params.username)
  const isOwnPage = user?.username === artist?.username
  // user doesn't exist or user.username is not the params.username, don't show edit button
  // user.username is not the params.username, show add comment
  if (artist) {
    // const spotifyId = artist?.socialLinks.get('spotify')!

    console.log(artist.socialLinks)
    return (
      artist && (
        <>
          <div className="flex justify-center gap-24 my-8">
            <Image
              src={artist.photo}
              alt="Artist image"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-4xl self-center">{artist.nameToDisplay}</h1>
            {isOwnPage && <Link href="/profile/edit">edit</Link>}
          </div>
          <SocialLinks />
          <div className="flex px-8 mt-12 justify-center">
            <Bio text="bio section" />
            {/* example */}
            <SpotifyWidget spotifyId={'06HL4z0CvFAxyc27GXpf02'} />
          </div>
          {/* <Images />
      <Videos /> */}
        </>
      )
    )
  }

  return <>This artist does not exist!</>
}

// export default async function Profile() {
//   // const users = await fetch(`http://localhost:3000/api/users`);
//   // console.log(await users.json())

//   return (
//     <div>profile</div>

//   )
// }
