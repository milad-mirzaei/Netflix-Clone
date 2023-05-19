import React from 'react'

interface MobileMenuProps{
    visible?:boolean;
}

const MobileMenu:React.FC<MobileMenuProps> = ({visible}) => {

if(!visible){
    return null;
}

  return (
    <div className='bg-black  w-56 absolute top-8 left-0  flex-col border-2 border-neutral-800 flex '>
        <div className='flex flex-col'>
            <div className='px-2 py-3 text-center text-white hover:bg-neutral-900 '>
                Home
            </div>
            <div className='px-2 py-3 text-center text-white hover:bg-neutral-900 '>
                Series
            </div>
            <div className='px-2 py-3 text-center text-white hover:bg-neutral-900 '>
                Films
            </div>
            <div className='px-2 py-3 text-center text-white hover:bg-neutral-900 '>
                New & Popular
            </div>
            <div className='px-2 py-3 text-center text-white hover:bg-neutral-900 '>
                My List
            </div>
            <div className='px-2 py-3 text-center text-white hover:bg-neutral-900 '>
                Browse by languages
            </div>
        </div>
    </div>
  )
}

export default MobileMenu