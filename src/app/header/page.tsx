import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return (
        <div> <header className="flex justify-between md:px-16 items-center p-6 bg-gray-100 ">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <Link className='flex' href="/"><Image src="/images/ms-logo.png" alt="Microsoft Logo" width={24} height={24} />
                        <span className=" pl-4 text-gray-700">Microsoft</span></Link>
                </div>
                <nav className="flex space-x-4 text-gray-600">
                    <span>|</span>
                    <a href="/" className="hover:underline">Rewards</a>
                    <a href="#" className="hover:underline">Copilot</a>
                </nav>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-gray-700">Login</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600">👤</span>
                </div>
            </div>
        </header></div>
    )
}
