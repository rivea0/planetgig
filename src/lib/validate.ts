import { z } from 'zod'

export const formSchema = z.object({
  nameToDisplay: z.string(),
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
})