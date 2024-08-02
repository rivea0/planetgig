import { SocialLinksType } from '@/types'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function SocialLinksFormComponent({
  placeholders,
}: {
  placeholders: SocialLinksType
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="website">Website</Label>
        <Input
          placeholder={placeholders.website}
          name="website"
          id="website"
          className="bg-coffee-50"
        />
      </div>
      <div>
        <Label htmlFor="spotify">Spotify</Label>
        <Input
          placeholder={placeholders.spotify}
          name="spotify"
          id="spotify"
          className="bg-coffee-50"
        />
      </div>
      <div>
        <Label htmlFor="twitter-x">X</Label>
        <Input
          placeholder={placeholders['twitter-x']}
          name="twitter-x"
          id="twitter-x"
          className="bg-coffee-50"
        />
      </div>
      <div>
        <Label htmlFor="facebook">Facebook</Label>
        <Input
          placeholder={placeholders.facebook}
          name="facebook"
          id="facebook"
          className="bg-coffee-50"
        />
      </div>
      <div>
        <Label htmlFor="youtube">YouTube</Label>
        <Input
          placeholder={placeholders.youtube}
          name="youtube"
          id="youtube"
          className="bg-coffee-50"
        />
      </div>
      <div>
        <Label htmlFor="instagram">Instagram</Label>
        <Input
          placeholder={placeholders.instagram}
          name="instagram"
          id="instagram"
          className="bg-coffee-50"
        />
      </div>
      <div>
        <Label htmlFor="bandcamp">Bandcamp</Label>
        <Input
          placeholder={placeholders.bandcamp}
          name="bandcamp"
          id="bandcamp"
          className="bg-coffee-50"
        />
      </div>
      <div>
        <Label htmlFor="soundcloud">Soundcloud</Label>
        <Input
          placeholder={placeholders.soundcloud}
          name="soundcloud"
          id="soundcloud"
          className="bg-coffee-50"
        />
      </div>
    </div>
  )
}
