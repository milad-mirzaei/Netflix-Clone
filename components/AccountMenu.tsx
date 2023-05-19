import useCurrentUser from '@/hooks/useCurrentUser';
import React from 'react'

interface AccountMenuProps{
    visible?:boolean;
}


const AccountMenu:React.FC<AccountMenuProps> = ({visible}) => {
  const {data:user}=useCurrentUser();
  
  if(!visible){
    return null;
  }
  
    return (
    <div className='bg-black w-56 absolute top-14 right-0  flex-col border-2 border-neutral-800 flex '>
        <div className='flex flex-col '>
            <div className='px-3 py-3 flex flex-row pl-5 gap-3 items-center w-full hover:bg-neutral-900 hover:pl-7 transition-all'>
                <img className='w-8 rounded-md' src="/images/default-blue.png" alt="" />
                <p className='text-white text-sm' >{user?.name}</p>
            </div>
            <div className='px-3 py-3 flex flex-row justify-center gap-3 items-center w-full hover:bg-neutral-800 text-white'>
                Sign out of Netflix
            </div>
        </div>
    </div>
  )
}

export default AccountMenu