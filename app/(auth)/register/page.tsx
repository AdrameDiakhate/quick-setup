import RegisterForm from '@/components/register/register-form/register-form'
import GoogleLogo from '@/components/svg-images/google-logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

function RegisterPage() {

  return (
    <div className='min-h-screen min-w-[320px] max-w-[468px] md:max-w-[768px] lg:min-w-[1024px] flex flex-col items-center justify-center px-7 pt-10 pb-10 lg:mt-30'>
      <div className='flex flex-col items-center justify-center w-full md:w-[468px] lg:w-[468px] lg:items-center lg:justify-center lg:absolute lg:left-1/3'>
        <div className='flex items-center justify-between md:hidden self-start'>
          <ChevronLeftIcon color='#877f96'/>
          <h4 className='text-sm text-[#877f96] font-semibold'> Home </h4>
        </div>
        <div className='w-full flex flex-col space-y-10 justify-start items-center'>
              <Avatar className='mt-10'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            <div className='flex flex-col justify-start space-y-1 text-center'>
              <h1 className='text-lg font-semibold'> Create a kick setup account </h1>
              <div className='flex text-sm gap-x-1'>
                <h4 className='text-[16px] text-primary'> Already have an account ? </h4> 
                <a href='#' className='text-[16px] text-primary'> Log in. </a>
              </div>
            </div>
        </div>

        <RegisterForm />

        <div className="w-full h-full flex justify-between items-center my-5">
          <div className="w-1/2 h-[0.1px] bg-[#acb0b7]"></div>
          <p className='mx-3 text-sm'>OR</p>
          <div className="w-1/2 h-[0.1px] bg-[#acb0b7]"></div>
        </div>

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


    </div>
  )
}

export default RegisterPage
