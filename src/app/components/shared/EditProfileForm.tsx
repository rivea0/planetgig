'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/app/components/ui/button'
import { Textarea } from '@/app/components/ui/textarea'
import { updateArtist } from '@/lib/actions/user.action'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import SocialLinksFormComponent from './SocialLinksFormComponent'
import MultipleElementsFormComponent from './MultipleElementsFormComponent'
import { ArtistType } from '@/types'

export default function EditProfileForm({
  userId,
  artist,
}: {
  userId: string
  artist: ArtistType
}) {
  const { pending } = useFormStatus()
  const updateArtistWithId = updateArtist.bind(null, userId)

  return (
    //@ts-ignore
    <form
      action={updateArtistWithId}
      className="flex flex-col space-y-8 md:p-4 p-2"
    >
      <div className="flex flex-col gap-3">
        <Label htmlFor="nameToDisplay">Name to display</Label>
        <Input
          placeholder="My Cool Band"
          type="text"
          name="nameToDisplay"
          id="nameToDisplay"
          className="bg-coffee-50"
        />
        <span className="text-sm text-muted-foreground">
          This is your display name, it defaults to your username.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          placeholder={artist.bio}
          name="bio"
          id="bio"
          className="bg-coffee-50"
        />
        <span className="text-sm text-muted-foreground">
          Enter a bio, less than 500 characters.
        </span>
      </div>
      <MultipleElementsFormComponent
        heading="Genres"
        length={4}
        element="genre"
        description="Enter genres that define you"
        defaultValues={artist.genres}
        cols={2}
      />
      <div className="border-2 border-coffee-300 rounded-md px-4 py-2">
        <h3 className="mb-2">Social links</h3>
        <SocialLinksFormComponent placeholders={artist.socialLinks} />
      </div>
      <MultipleElementsFormComponent
        heading="Images to display"
        length={6}
        element="image"
        defaultValues={artist.images}
        cols={1}
      />
      <MultipleElementsFormComponent
        heading="Video links to display"
        length={6}
        element="video"
        description="Enter YouTube links to display on your profile page."
        defaultValues={artist.videos}
        cols={1}
      />
      <Button
        type="submit"
        disabled={pending}
        className="max-w-min self-center"
      >
        Update profile
      </Button>
    </form>
  )
}
