import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { getCurrentUser } from "@/lib/actions/user.action";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let user
  try {
    user = await getCurrentUser()
  } catch(err) {
    user = null
  }

  return user ? (
    <div className={'flex h-screen flex-col'}>
      <Header isAuth={true} username={user?.username} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  ) : (
    <div className="flex h-screen flex-col bg-hero-pattern bg-center bg-cover">
      <Header isAuth={false} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
