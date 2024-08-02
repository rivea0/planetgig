'use client'

import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'
import { Button } from '../ui/button'

export default function ReviewButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      onClick={() => {
        toast.success('Review sent!')
      }}
    >
      Send review
    </Button>
  )
}
