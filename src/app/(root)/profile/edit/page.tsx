// import { auth } from "@clerk/nextjs/server"
import EditProfileForm from '@/app/components/shared/EditProfileForm'
import { getCurrentUser } from '@/lib/actions/user.action'

export default async function EditProfile() {
  let user
  try {
    user = await getCurrentUser()
  } catch (err) {
    user = null
  }

  // const { sessionClaims } = auth()
  // const userId = sessionClaims?.userId as string

  return user ? (
    <div className="flex flex-col justify-center items-center bg-coffee-100">
      <h1 className="text-3xl mt-8">Edit Profile</h1>
      <EditProfileForm userId={user.id} />
    </div>
  ) : (
    <div>User does not exist</div>
  )
}
