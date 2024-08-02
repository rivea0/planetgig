import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { getCurrentUser } from '@/lib/actions/user.action'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let user
  try {
    user = await getCurrentUser()
  } catch (err) {
    user = null
  }
  return (
    <div
      className={`flex flex-col h-screen bg-hero-pattern bg-cover bg-center`}
    >
      {user ? (
        <Header isAuth={true} username={user?.username} />
      ) : (
        <Header isAuth={false} />
      )}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
