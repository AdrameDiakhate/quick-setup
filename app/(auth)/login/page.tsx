import LoginForm from '@/components/auth/login/login-form'
import OrSeparator from '@/components/auth/or-separator'
import SocialNetworkAuth from '@/components/auth/social-network-auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronLeftIcon } from 'lucide-react'
import React from 'react'

function LoginPage() {
  return (
    <div className='w-[468px]'>
      <LoginForm />
      <OrSeparator />
      <SocialNetworkAuth />
    </div>
  )
}

export default LoginPage