import Homebar from '@/app/components/homebar/page'
import SuggestedRewards from '@/app/components/secondcards/page'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

export default function Redeempage() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 ">
            <Homebar />







            <div className="flex flex-col lg:flex-row p-6 bg-gray-100 min-h-screen px-16">
                {/* Left Side Panel */}
                <div className="w-full lg:w-1/3 p-4 mb-6 lg:mb-0">
                    <div className="flex items-center border-b border-gray-300 pb-3 mb-4">
                        <FaSearch className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full outline-none bg-transparent text-gray-600"
                        />
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center justify-between text-gray-600 font-medium mb-2">
                            <span>Show</span>
                            <FiChevronDown />
                        </div>
                        <div className="text-gray-800 font-semibold">All categories</div>
                    </div>

                    <ul className="space-y-4 text-gray-600">
                        <li className="cursor-pointer hover:text-blue-500">Order history</li>
                        <li className="cursor-pointer hover:text-blue-500">Redeem a code</li>
                    </ul>
                </div>

                {/* Right Side Cards */}
                <div>
                <div className="w-full lg:w-3/2 grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                    {/* Card 1 */}
                    <div className="bg-white rounded-md shadow-md p-4">
                        <img
                            src="/images/sea.png"
                            alt="Sea of Thieves"
                            className="w-full rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">Sea of Thieves: Ancient Coin Pack</h3>
                        <p className="text-gray-600 mb-4">1,700 points</p>
                        <button className="text-blue-500 font-medium">REDEEM REWARD</button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-md shadow-md p-4">
                        <img
                            src="/images/sec.png"
                            alt="Overwatch Coins"
                            className="w-full rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">Overwatch Coins Digital Code</h3>
                        <p className="text-gray-600 mb-4">1,800 points</p>
                        <button className="text-blue-500 font-medium">REDEEM REWARD</button>

                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-md shadow-md p-4">
                        <img
                            src="/images/the.png"
                            alt="Sea of Thieves"
                            className="w-full rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">Shopon.pk Gift Card Rs300</h3>
                        <p className="text-gray-600 mb-4">1,700 points</p>
                        <button className="text-blue-500 font-medium">REDEEM REWARD</button>
                    </div>
                     {/* Card 4 */}
                     <div className="bg-white rounded-md shadow-md p-4">
                        <img
                            src="/images/the.png"
                            alt="Sea of Thieves"
                            className="w-full rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">Shopon.pk Gift Card Rs300</h3>
                        <p className="text-gray-600 mb-4">1,700 points</p>
                        <button className="text-blue-500 font-medium">REDEEM REWARD</button>
                    </div>
                   
                </div>

                <div className='bg-black h-1 w-full '></div>




<div><SuggestedRewards /></div>
            </div>

            </div>



        </div>
    )
}
