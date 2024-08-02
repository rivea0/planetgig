import EditProfileForm from '@/app/components/shared/EditProfileForm'
import { getCurrentUser, getArtistByClerkId } from '@/lib/actions/user.action'
export default async function EditProfile() {
  let user
  try {
    user = await getCurrentUser()
  } catch (err) {
    user = null
  }
  if (user) {
    const artist = await getArtistByClerkId(user.id)

    return (
      <div className="flex flex-col justify-center items-center bg-coffee-50">
        <h1 className="text-3xl mt-8">Edit Profile</h1>
        <EditProfileForm
          userId={user.id}
          artist={JSON.parse(JSON.stringify(artist))}
        />
      </div>
    )
  }

  return <div>User does not exist</div>
}
