import { z } from 'zod'

export const reviewSchema = z.object({
  content: z.string(),
})

export const formSchema = z.object({
  nameToDisplay: z.string().optional(),
  bio: z.string().max(500).optional(),
  website: z.string().url().optional(),
  spotify: z.string().optional(),
  'twitter-x': z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  bandcamp: z.string().optional(),
  soundcloud: z.string().optional(),
  genre1: z.string().optional(),
  genre2: z.string().optional(),
  genre3: z.string().optional(),
  genre4: z.string().optional(),
  image1: z.string().optional(),
  image2: z.string().optional(),
  image3: z.string().optional(),
  image4: z.string().optional(),
  image5: z.string().optional(),
  image6: z.string().optional(),
  video1: z.string().optional(),
  video2: z.string().optional(),
  video3: z.string().optional(),
  video4: z.string().optional(),
  video5: z.string().optional(),
  video6: z.string().optional(),
})
