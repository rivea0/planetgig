export default function Bio({ text }: { text: string }) {
  return (
    <div className="flex-1 flex flex-col items-center border-1">
      <p className="text-lg px-8 pb-4">{text}</p>
    </div>
  )
}
