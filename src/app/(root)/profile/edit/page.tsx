import { auth } from "@clerk/nextjs/server"
import EditProfileForm from "@/app/components/shared/EditProfileForm"

export default function EditProfile() {
  const { sessionClaims } = auth()

  const userId = sessionClaims?.userId as string
  
  
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-3xl">Edit Profile</h1>
      <EditProfileForm userId={userId} />
      </div>
  )
}
