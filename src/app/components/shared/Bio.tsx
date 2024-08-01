export default function Bio({ text }: { text: string }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <h2 className="text-2xl">Bio</h2>
      {text}
    </div>
  )
}