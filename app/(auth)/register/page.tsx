import OrSeparator from '@/components/auth/or-separator'
import RegisterForm from '@/components/auth/register/register-form/register-form'
import SocialNetworkAuth from '@/components/auth/social-network-auth'
import GoogleLogo from '@/components/svg-images/google-logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

function RegisterPage() {

  return (
    <div>
        <RegisterForm />
        
        <OrSeparator />

        <SocialNetworkAuth />
    </div>
  )
}

export default RegisterPage
