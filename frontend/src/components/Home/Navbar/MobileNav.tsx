'use client';
import { useRouter } from 'next/navigation'
import { navlinks } from '../../../constants/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("token");
    }
    return false;
  });

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/* navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {/* close button */}
        <CgClose onClick={closeNav} className='absolute top-[1.7rem] right-[1.4rem] sw:w-8 sm:h-8 w-6 h-6' />


        {navlinks
          .filter(item => isLoggedIn || (item.id !== 7 && item.id !== 5))
          .map((item) => {
            return (
              <p
                key={item.id}
                className="navButtonStyleMap pl-10 cursor-pointer"
                onClick={() => {
                  if (item.url === "#") {
                    toast(
                      "No link present!",
                      {
                        icon: '⚠️',
                        style: {
                          border: "1px solid #facc15",
                          padding: "8px",
                          color: "#713f12",
                        },
                      }
                    );
                  }
                  else {
                    toast.success("Redirecting...");
                    router.push(item.url);
                  }
                }}
              >
                {item.lable}
              </p>
            )
          })}
      </div>
    </div>
  )
}

export default MobileNav