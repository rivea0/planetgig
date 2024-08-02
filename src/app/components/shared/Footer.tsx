export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center text-gray-400 text-sm bg-coffee-50">
      <p>
        &copy; <span>{new Date().getFullYear()}</span> PlanetGig
      </p>
    </footer>
  )
}
