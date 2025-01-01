import React from 'react';
import { IoEarthSharp } from 'react-icons/io5';

export default function Bottom() {
    return (
        <div className="">
            {/* Top Section */}
            <div className="w-full bg-white px-6 md:px-16 py-4 md:h-52">
                <div className="pb-4">
                    <p className="text-xl md:text-2xl font-bold mb-2 pt-4">
                        Help with Microsoft Rewards
                    </p>
                    <div className="bg-black h-1 w-full"></div>
                    <div className="">
                        <p className="text-blue-400 pt-4">Find how to resolve common issues</p>
                        <p className="text-blue-400 pt-2">Provide feedback</p>
                        <p className="text-blue-400 pt-2">Contact Microsoft Rewards support</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full bg-gray-100 flex flex-col md:flex-row justify-between px-6 md:px-16 py-3 md:py-4">
                {/* Language Selector */}
                <div className="flex items-center justify-center md:justify-start mb-3 md:mb-0">
                    <IoEarthSharp size={26} />
                    <span>
                        <h4 className="pl-2 text-sm md:text-base pt-1">English (United States)</h4>
                    </span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center md:justify-end md:pt-2 md:pr-16 space-x-4 text-center text-sm md:text-base">
                    <span className="pl-4 text-sm">Privacy and Cookies</span>
                    <span className="pl-4 text-sm">Terms of use</span>
                    <span className="pl-4 text-sm">Contact us</span>
                    <span className="pl-4 text-sm">© Microsoft 2024</span>
                </div>
            </div>
        </div>
    );
}
