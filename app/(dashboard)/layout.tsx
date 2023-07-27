import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Journal', href: '/journal' },
  { label: 'History', href: '/history' },
]

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen w-screen">
      <aside className="absolute left-0 top-0 h-full w-[200px] border-r border-black/10">
        <div className="my-4 px-4">
          <span className="text-3xl">Moodsense</span>
        </div>
        <div>
          <ul className="px-4">
            {links.map((link) => (
              <li key={link.label} className="px-2 py-6 text-xl">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="ml-[200px] h-full w-[calc(100vw-200px)]">
        <header className="h-[60px] border-b border-black/10">
          <nav className="h-full px-8">
            <div className="flex h-full items-center justify-end">
              <UserButton />
            </div>
          </nav>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
