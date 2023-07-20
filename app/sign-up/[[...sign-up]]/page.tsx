import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SignUp redirectUrl="/new-user" afterSignUpUrl="/new-user" />
    </div>
  )
}

export default SignUpPage
