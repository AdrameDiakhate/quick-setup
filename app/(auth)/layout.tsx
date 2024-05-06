import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronLeftIcon } from 'lucide-react';

export default function AuthLayout ({ children } : { children : React.ReactNode }){
    return(
        <div>
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
                <div>
                    { children }
                </div>
            </div>


        </div>
    )
}
