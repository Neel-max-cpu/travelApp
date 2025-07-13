import { navlinks } from '../../../constants/constants'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props={
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({showNav, closeNav}:Props) => {

  const navOpen = showNav?"translate-x-0":"translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/* navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {/* close button */}
        <CgClose onClick={closeNav} className='absolute top-[1.7rem] right-[1.4rem] sw:w-8 sm:h-8 w-6 h-6' />

        {navlinks.map((item)=>{
          return(
            <Link href={item.url} key={item.id}>
              <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-yellow-300 sm:text-[30px]'>{item.lable}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNav