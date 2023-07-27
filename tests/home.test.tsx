import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import Page from '../app/page'

vi.mock('@clerk/nextjs', () => {
  const mockedFunctions = {
    auth: () => Promise.resolve({ userId: 'user_2NNEqL2nrIRdJ194ndJqAHwEfxC' }),
    ClerkProvider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: 'user_2NNEqL2nrIRdJ194ndJqAHwEfxC',
        fullName: 'John Doe',
      },
    }),
  }

  return mockedFunctions
})

vi.mock('next/font/google', () => {
  return {
    Inter: () => ({ className: 'inter' }),
  }
})

test(`Home`, async () => {
  render(await Page())
  expect(
    screen.getByText(
      'MoodSense: Harness AI to Understand Your Emotional Journey',
    ),
  ).toBeInTheDocument()
  expect(
    screen.getByText(
      'Welcome to MoodSense, your gateway to unlocking a deeper understanding of your emotions through the power of AI. With MoodSense, discover the mood behind your journaling posts and gain insightful perspectives on your emotional well-being. Experience the transformative capabilities of our intelligent app as you embark on a journey of self-reflection and personal growth. Start exploring today and let MoodSense illuminate the path to emotional awareness and well-being.',
    ),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: 'Get Started' }),
  ).toBeInTheDocument()
})
