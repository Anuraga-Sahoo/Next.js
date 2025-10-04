import React from 'react'
import Image from 'next/image'
import myImage from '@/public/a.jpg'

const page = () => {
  return (
    <div className='w-full bg-red-300 flex items-center justify-center '>
     <div className='p-4 bg-white rounded-xl'>
      <Image src={myImage}
      width={200}
      height={200}
      alt='my image'
      // fill={true}
      // quality={100}
      priority={false}
      placeholder='blur'
      blurDataURL=''
      />
     </div>
    </div>
  )
}

export default page
