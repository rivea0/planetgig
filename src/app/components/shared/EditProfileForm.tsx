'use client'

import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '@/lib/validate'
import { useForm } from 'react-hook-form'
import { useFormStatus } from 'react-dom'
import { z } from 'zod'
import { Button } from '@/app/components/ui/button'
import { Textarea } from '@/app/components/ui/textarea'
import { updateArtist } from '@/lib/actions/user.action'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import SocialLinksFormComponent from './SocialLinksFormComponent'
import MultipleElementsFormComponent from './MultipleElementsFormComponent'

export default function EditProfileForm({ userId }: { userId: string }) {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  const { pending } = useFormStatus()
  // })
  const updateArtistWithId = updateArtist.bind(null, userId)
  //   async function onSubmit(values: z.infer<typeof formSchema>) {

  //     try {
  //       const updatedArtist = await updateArtist(
  //         userId,
  //         values,
  //       )
  //       console.log(updatedArtist)
  //       // if(updatedEvent) {
  //       //   form.reset();
  //       //   // const artist = await getArtistByClerkId(userId)
  //       //   // router.push(`/profile/${artist!.username}`)
  //       // }
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }

  return (
    //@ts-ignore
    <form action={updateArtistWithId} className="flex flex-col space-y-8 p-2">
      <div className="flex flex-col gap-3">
        <Label htmlFor="nameToDisplay">Name to display</Label>
        <Input
          placeholder="My Cool Band"
          type="text"
          name="nameToDisplay"
          id="nameToDisplay"
        />
        <span className="text-sm text-muted-foreground">
          This is your display name, it defaults to your username
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="bio">Bio</Label>
        <Textarea placeholder="Enter bio..." name="bio" id="bio" />
        <span className="text-sm text-muted-foreground">
          Enter a bio, less than 500 characters.
        </span>
      </div>
      <MultipleElementsFormComponent
        heading="Genres"
        length={4}
        element="genre"
        description="Enter genres that define you"
      />
      <div className="border-2 px-4 py-2">
        <h3 className="mb-2">Social links</h3>
        <SocialLinksFormComponent />
      </div>
      <MultipleElementsFormComponent
        heading="Images to display"
        length={5}
        element="image"
      />
      <MultipleElementsFormComponent
        heading="Video links to display"
        length={6}
        element="video"
        description="Enter YouTube links to display on your profile page"
      />
      <Button
        type="submit"
        disabled={pending}
        className="max-w-min self-center"
      >
        Submit
      </Button>
    </form>
  )
}
