import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const { userId } = auth()

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-[780px] p-8 text-center">
        <h1 className="animate-delay-200 animate-fade-in text-4xl font-bold leading-tight md:text-6xl">
          MoodSense: Harness AI to Understand Your Emotional Journey
        </h1>
        <p className="animate-delay-400 mt-4 animate-fade-in text-lg leading-relaxed md:text-xl">
          Welcome to MoodSense, your gateway to unlocking a deeper understanding
          of your emotions through the power of AI. With MoodSense, discover the
          mood behind your journaling posts and gain insightful perspectives on
          your emotional well-being. Experience the transformative capabilities
          of our intelligent app as you embark on a journey of self-reflection
          and personal growth. Start exploring today and let MoodSense
          illuminate the path to emotional awareness and well-being.
        </p>
        <div className="animate-delay-600 mt-6 animate-fade-in">
          <Link href={userId ? '/journal' : '/new-user'}>
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-xl font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
