import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer"
import { currentUser } from '@clerk/nextjs/server';

// import { getCurrentUser } from "@/lib/actions/user.action";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser()

  return (
    <div className={`flex h-screen flex-col ${!user ? 'bg-hero-pattern bg-center bg-cover' : ''}`}>
      <Header isAuth={!!user} username={user?.username} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
