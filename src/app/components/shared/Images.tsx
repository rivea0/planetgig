import Image from 'next/image'

export default function Images({ imageList }: { imageList: string[] }) {
  return (
    <div className="grid md:grid-cols-2 justify-items-center gap-1 px-8 mt-4">
      {imageList.map((imageUrl) => {
        return imageUrl ? (
          <div key={imageUrl} className="">
            <Image src={imageUrl} alt="" width={700} height={250} />
          </div>
        ) : null
      })}
    </div>
  )
}
