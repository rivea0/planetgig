import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function SocialLinksFormComponent() {
  return (
    <div className="grid grid-cols-2 gap-4">
    <div>
      <Label htmlFor="website">Website</Label>
      <Input placeholder="" name="website" id="website" />
    </div>
    <div>
      <Label htmlFor="spotify">Spotify</Label>
      <Input placeholder="" name="spotify" id="spotify" />
    </div>
    <div>
      <Label htmlFor="twitter-x">X</Label>
      <Input placeholder="" name="twitter-x" id="twitter-x" />
    </div>
    <div>
      <Label htmlFor="facebook">Facebook</Label>
      <Input placeholder="" name="facebook" id="facebook" />
    </div>
    <div>
      <Label htmlFor="youtube">YouTube</Label>
      <Input placeholder="" name="youtube" id="youtube" />
    </div>
    <div>
      <Label htmlFor="instagram">Instagram</Label>
      <Input placeholder="" name="instagram" id="instagram" />
    </div>
    <div>
      <Label htmlFor="bandcamp">Bandcamp</Label>
      <Input placeholder="" name="bandcamp" id="bandcamp" />
    </div>
    <div>
      <Label htmlFor="soundcloud">Soundcloud</Label>
      <Input placeholder="" name="soundcloud" id="soundcloud" />
    </div>
  </div>

  )
}