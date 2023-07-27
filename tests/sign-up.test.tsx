import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import SignUpPage from '../app/sign-up/[[...sign-up]]/page'

vi.mock('@clerk/nextjs', () => {
  const SignUpMock = ({
    redirectUrl,
    afterSignUpUrl,
  }: {
    redirectUrl: string
    afterSignUpUrl: string
  }) => (
    <div
      data-testid="mocked-signup"
      data-redirect-url={redirectUrl}
      data-after-sign-up-url={afterSignUpUrl}
    />
  )

  return {
    SignUp: SignUpMock,
  }
})

test('SignUpPage renders SignUp component with correct props', () => {
  render(<SignUpPage />)

  const signUpComponent = screen.getByTestId('mocked-signup')
  expect(signUpComponent).toBeInTheDocument()

  // Check if the SignUp component has the correct props
  expect(signUpComponent).toHaveAttribute('data-redirect-url', '/new-user')
  expect(signUpComponent).toHaveAttribute('data-after-sign-up-url', '/new-user')
})
