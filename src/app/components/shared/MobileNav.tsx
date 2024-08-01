import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/app/components/ui/sheet'
import NavItems from './NavItems'

export default function MobileNav({ isAuth, username }: { isAuth: boolean, username?: string | null }) {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/menu.svg"
            alt="Menu icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 md:hidden'>
          <NavItems isAuth={isAuth} username={username} />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
