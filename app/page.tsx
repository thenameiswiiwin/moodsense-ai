import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="mx-auto w-full max-w-[780px] space-y-6">
        <h1 className="text-6xl">
          MoodSense: Harness AI to Understand Your Emotional Journey
        </h1>
        <p className="text-2xl text-white/60">
          Welcome to MoodSense, your gateway to unlocking a deeper understanding
          of your emotions through the power of AI. With MoodSense, discover the
          mood behind your journaling posts and gain insightful perspectives on
          your emotional well-being. Experience the transformative capabilities
          of our intelligent app as you embark on a journey of self-reflection
          and personal growth. Start exploring today and let MoodSense
          illuminate the path to emotional awareness and well-being.
        </p>
        <div>
          <Link href="/">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
