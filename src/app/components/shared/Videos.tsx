import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel'
import YouTubeWidget from './YouTubeWidget'

export default function Videos({ videoIds }: { videoIds: string[] }) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full md:max-w-5xl"
    >
      <CarouselContent className='className="-ml-4"'>
        {videoIds.map((id) => (
          <CarouselItem
            key={id}
            className='pl-1 md:w-[700] md:basis-1/2 lg:basis-1/3"'
          >
            <div className="p-1">
              <YouTubeWidget videoId={id} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-between">
        <CarouselPrevious className="static bg-zinc-200" />
        <CarouselNext className="static bg-zinc-200" />
      </div>
    </Carousel>
  )
}
