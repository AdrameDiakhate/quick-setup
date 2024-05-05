import React from 'react'
import { Button } from '../ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import GoogleLogo from '../svg-images/google-logo'

function SocialNetworkAuth() {
  return (
    <div>
        <div className='flex flex-col space-y-3 mb-7 '>
          <div className='flex flex-col justify-center gap-y-[1rem] gap-x-[1rem] md:flex-row'>
            <Button size={'lg'} variant="outline" color='#adb6bc' className='text-[#adb6bc]'>
              <GitHubLogoIcon className="mr-3 h-4 w-4" /> Signup with Github
            </Button>
            <Button size={'lg'} variant="outline" className='gap-x-3 text-[#adb6bc]'>
              <GoogleLogo />
              <span > Signup with Google </span>
            </Button>
          </div>

          <Button variant="outline" className='pr-2 text-[#adb6bc]' size={'lg'}>Sign up with SSO</Button>

        </div>

        <p className='text-sm text-justify text-[#8798a7]'>
          By signing up,you agree to our <a href='#'>terms </a>, <a href='#'>acceptable use </a>,and <a href='#'> privacy policy </a>.
        </p>
        
    </div>
  )
}

export default SocialNetworkAuth