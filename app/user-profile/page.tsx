import React from 'react'
import Image from 'next/image'
import Avatar from '@/components/atoms/avatar'
import PencilIcon from '@/components/svg-images/pencil-icon';
import CameraIcon from '@/components/svg-images/camera-icon';
import { Button } from '@/components/ui/button';

interface UserProfileProps {
  user : User;
}
export default function UserProfile({user } : UserProfileProps) {
  return (
        <div className='w-full md:w-[770px] lg:w-full h-full '>
          <Image src="/banner.png" alt="cover image" layout="responsive" width={375} height={375}/>
          <div className='flex md:flex-row justify-between'>
            <div className='flex flex-col items-start justify-start md:flex-row md:items-center w-full'>
              <div className='relative md:bottom-[25px] md:w-[100px] mx-[16px]'>
                <Avatar src="/profile.png" size='lg' className='relative bottom-[15px]'/>
                <CameraIcon className='absolute left-[50px] bottom-[14px] md:hidden lg:block'/>
              </div>
              <div className='w-full mx-[16px]'>
                <h1 className='font-semibold md:text-[18px] leading-[26px]'> Boubacar Diallo </h1>
                <p className='text-[#0958A5] italic font-semibold'> Serial entrepreneur, CEO SoCool </p>
                <p className='text-justify text-[12px] md:text-[12px] opacity-70 md:flex-grow'> 
                  🎨 Boubacar Diallo | Stratège en Design & Entrepreneur 🛠️ CEO @ SoCool | Force motrice @ Booster Enterprise 
                  🌍 De Dakar vers le monde, 
                  Voir Plus xpériences où design et fonctionnalité se rencontrent 🚀 
                  Passionné par le mentorat de jeunes entrepreneurs 🔗 En savoir plus sur mes projets et visions! 
                  </p>
              </div>
            </div>
            <Button className='mx-[16px] mt-[20px] flex justify-between rounded-lg' variant={'secondary'} size={'sm'}>
              <div className='w-[200px] flex justify-between'>
                <span className='hidden lg:block italic text-[12px]'> Modifier mes informations </span>
                <PencilIcon/>

              </div>
            </Button>
          </div>
          <div className='flex'>

          </div>
        </div>
  )
}
