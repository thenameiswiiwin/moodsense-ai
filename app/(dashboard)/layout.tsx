'use client'

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Journal', href: '/journal' },
  { label: 'History', href: '/history' },
]

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Mobile Header */}
      {isMobile && (
        <header className="flex h-16 items-center justify-between border-b border-black/10 bg-gray-900 px-4 text-white">
          <div className="flex items-center">
            {/* Moodsense Title */}
            <h1 className="animate-fade-in text-3xl font-bold">Moodsense</h1>

            {/* Navigation Links */}
            <nav className="ml-4 animate-fade-in delay-200">
              <ul className="flex">
                {links.map((link) => (
                  <li key={link.label} className="px-2 py-3 text-lg">
                    <Link href={link.href} className="hover:text-blue-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* User Button */}
          <UserButton />
        </header>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isMobile ? 'hidden' : 'w-1/4'
        } animate-fade-in bg-gray-900 text-white delay-200 md:flex md:flex-col`}
      >
        {/* Desktop Header */}
        {!isMobile && (
          <div className="flex h-16 items-center justify-center border-b border-black/10">
            <h1 className="text-3xl font-bold">Moodsense</h1>
          </div>
        )}

        <nav className="py-4">
          <ul className="px-4">
            {links.map((link) => (
              <li key={link.label} className="py-2">
                <Link
                  href={link.href}
                  className="block text-lg hover:text-blue-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grow"></div>
        <div className="flex h-16 items-center justify-center">
          {/* User Button */}
          <UserButton />
        </div>
      </aside>

      {/* Content Area */}
      <div
        className={`${
          isMobile ? 'w-full' : 'w-3/4'
        } delay-400 animate-fade-in overflow-auto p-4`}
      >
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
