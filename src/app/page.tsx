"use client"
import React from 'react'
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import ModeToggle from '@/app/components/ModdleToggle'
import {Button, ButtonGroup} from "@nextui-org/react";
import { perks } from '@/app/constants/constants';
import Link from 'next/link';

import { buttonVariants } from 'chad/button';
const page = () => {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3l'>
   <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl'>
   Your marketplace for high quality{''}
   <br/>
   <span className='text-orange-600'>
    digital assets
   </span>
   .
   </h1>
   <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
    Welcome to DigitalHippo.Every asset on our platform is verified by our team to ensure our highest quality standards
   </p>
      
      <div className='flex flex-col  gap-4 mt-6'>
        <Link href='/products' className={buttonVariants()}>Browse Trending</Link>

        <Button variant='ghost'>Our quality promise &rarr;</Button>

      </div>
      </div>
  
   </MaxWidthWrapper>
   <section className='border-t border-gray-200 '>
    <MaxWidthWrapper className=''>
    <div className='grid grid-cols-1 gap-y-12 sm:grids-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0  py-20 mx-auto '>
   
          {perks.map((perk, index) => (
            <div key={perk.name}
            className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
            >
              <div className='md:flex-shrink-0 flex justify-center'>
            <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-200'>
           {<perk.Icon className='w-1/3 h-1/3 dark:font-bold text-black'/>}
            </div>
              </div>

              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>
                <p className='mt-3 text-sm text-muted-foreground'>
                  {perk.description}
                </p>
                </h3>

              </div>
            </div>

          ))}
       

    </div>
    </MaxWidthWrapper>

   </section>
    </>
  )
}

export default page


