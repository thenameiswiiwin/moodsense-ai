import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return <SignUp redirectUrl="/new-user" afterSignUpUrl="/new-user" />
}

export default SignUpPage
