import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaRegCopyright } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
        <div className="w-[80%] mx-auto items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* first part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Company</h1>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        About us
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Careers
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Blogs
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Gift Cards
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Magazine
                    </p>    
                </Link>
            </div>
            {/* second part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Support</h1>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Contact
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Legal Notice
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Privacy Policy
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Terms & Condition
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        SiteMap
                    </p>    
                </Link>
            </div>
            {/* third part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Other Services</h1>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Car Hire
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Activity Finder
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Tour List
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Flight Finder
                    </p>    
                </Link>
                <Link href="#" className="block">
                    <p className="underline-footer">
                        Travel Agents
                    </p>    
                </Link>
            </div>
            {/* fourth part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Contact Us</h1>
                <div className="mt-6">
                    <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
                    <h1 className="mt-1 underline-footer2">+0 123-456-789</h1>
                </div>
                <div className="mt-6">
                    <h1 className="text-sm text-gray-600">Our Email</h1>
                    <h1 className="underline-footer2 mt-1">example@gmail.com</h1>
                </div>
            </div>
        </div>
        {/* copy right */}
        <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p className="flex text-center items-center md:text-left">
                Copyright © Neel-max-cpu. All right reserved
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="">Our Socials: </span>
                <Link href="#" className="block text-gray-500 hover:text-blue-500"> <FaGithub className='w-5 h-5'/> </Link>
                <Link href="#" className="block text-gray-500 hover:text-blue-500"> <FaSquareXTwitter className='w-5 h-5'/> </Link>
                <Link href="#" className="block text-gray-500 hover:text-blue-500"> <FaInstagram className='w-5 h-5'/> </Link>
                <Link href="#" className="block text-gray-500 hover:text-blue-500"> <FaFacebook className='w-5 h-5'/> </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer