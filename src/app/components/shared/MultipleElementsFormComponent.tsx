import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function MultipleElementsFormComponent({
  heading,
  length,
  element,
  description,
}: {
  heading: string
  length: number
  element: string
  description?: string
}) {
  return (
    <div className="border-2 px-4 py-2">
      <h3 className="mb-2">{heading}</h3>
      {description && (
        <span className="text-sm text-muted-foreground">
          {description}
        </span>
      )}
      <div className="grid grid-cols-2 gap-3 p-1">
        {Array.from({ length: length }, (_, i) => i + 1).map((count) => {
          return (
            <div key={count}>
              <Label
                htmlFor={`${element}${count}`}
              >{`${element[0].toUpperCase()}${element.slice(
                1
              )} ${count}`}</Label>
              <Input
                placeholder=""
                name={`${element}${count}`}
                id={`${element}${count}`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
  {
    /* <div>
          <Label htmlFor="image1">Image 1</Label>
          <Input placeholder="" name="image1" id="image1" />
        </div>
        <div>
          <Label htmlFor="image2">Image 2</Label>
          <Input placeholder="" name="image2" id="image2" />
        </div>
        <div>
          <Label htmlFor="image3">Image 3</Label>
          <Input placeholder="" name="image3" id="image3" />
        </div>
        <div>
          <Label htmlFor="image4">Image 4</Label>
          <Input placeholder="" name="image4" id="image4" />
        </div>
        <div>
          <Label htmlFor="image5">Image 5</Label>
          <Input placeholder="" name="image5" id="image5" />
        </div>
        <div>
          <Label htmlFor="image6">Image 6</Label>
          <Input placeholder="" name="image6" id="image6" />
        </div>
      </div>
    </div> */
  }
}
