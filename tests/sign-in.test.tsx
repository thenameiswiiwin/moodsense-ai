import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import SignInPage from '../app/sign-in/[[...sign-in]]/page'

vi.mock('@clerk/nextjs', () => {
  const SignInMock = ({ signUpUrl }: { signUpUrl: string }) => (
    <div data-testid="mocked-signin" data-sign-up-url={signUpUrl} />
  )

  return {
    SignIn: SignInMock,
  }
})

test('SignInPage renders SignIn component with correct signUpUrl prop', () => {
  render(<SignInPage />)

  const signInComponent = screen.getByTestId('mocked-signin')
  expect(signInComponent).toBeInTheDocument()

  // Check if the SignIn component has the correct signUpUrl prop
  expect(signInComponent).toHaveAttribute('data-sign-up-url', '/sign-up')
})
