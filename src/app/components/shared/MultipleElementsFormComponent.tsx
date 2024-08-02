import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function MultipleElementsFormComponent({
  heading,
  length,
  element,
  description,
  defaultValues,
  cols,
}: {
  heading: string
  length: number
  element: string
  description?: string
  defaultValues?: string[]
  cols: number
}) {
  const gridCols = `grid-cols-${cols}`
  return (
    <div className="border-2 border-coffee-300 rounded-md px-8 py-6">
      <h3 className="mb-2">{heading}</h3>
      {description && (
        <span className="text-sm text-muted-foreground">{description}</span>
      )}
      <div className={`grid ${gridCols} gap-3 p-1`}>
        {Array.from({ length: length }, (_, i) => i + 1).map((count) => {
          return (
            <div key={count}>
              <Label
                htmlFor={`${element}${count}`}
              >{`${element[0].toUpperCase()}${element.slice(
                1
              )} ${count}`}</Label>
              <Input
                placeholder={defaultValues![count - 1] || ''}
                name={`${element}${count}`}
                id={`${element}${count}`}
                className="bg-coffee-50"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
