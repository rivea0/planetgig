'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '@/lib/validate'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/app/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form'
import { Input } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'
import Artist from '@/lib/database/models/artist.model'
import { updateArtist } from '@/lib/actions/user.action'

export default function EditProfileForm({ userId }: { userId: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameToDisplay: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    await updateArtist(userId, values)  
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2">
        <FormField
          control={form.control}
          name="nameToDisplay"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Name to display</FormLabel>
              <FormControl>
                <Input placeholder="My Cool Band" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name, it defaults to your username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter bio..." {...field} />
              </FormControl>
              <FormDescription>
                Enter a bio, less than 500 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='border-2 px-4 py-2'>
          <h1>Genres</h1>
          <span className='text-sm text-muted-foreground'>Enter genres that define you</span>
          <div className='grid grid-cols-2 gap-2'>
          <FormField
          control={form.control}
          name="genre1"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Genre 1</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre2"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Genre 2</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre3"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Genre 3</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre4"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Genre 4</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
        </div>
        <div className='border-2 px-4 py-2'>
        <h3 className='mb-2'>Social links</h3>
        <div className='grid grid-cols-2 gap-4'>
        <FormField
          control={form.control}
          name="website"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spotify"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Spotify</FormLabel>
              <FormControl>
                <Input placeholder="spotify" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="twitter-x"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>X</FormLabel>
              <FormControl>
                <Input placeholder="X" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="facebook"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input placeholder="facebook" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="youtube"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>YouTube</FormLabel>
              <FormControl>
                <Input placeholder="youtube" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instagram"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Instagram</FormLabel>
              <FormControl>
                <Input placeholder="instagram" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bandcamp"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Bandcamp</FormLabel>
              <FormControl>
                <Input placeholder="bandcamp" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="soundcloud"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Soundcloud</FormLabel>
              <FormControl>
                <Input placeholder="soundcloud" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
