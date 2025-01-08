import Homebar from '@/app/components/homebar/page'
import React from 'react'
import { FaCoins, FaFacebook, FaShoppingCart, FaTwitter, FaUserCircle } from "react-icons/fa";
export default function Statuspage() {
    const cards = [
        {
            icon: "/images/d1.png", // Replace with your soccer image path
            title: "You haven't set a goal yet",
            description: "Start earning towards a redemption goal.",
            linkText: "Set a goal",
            linkHref: "#",
        },
        {
            icon: "/images/d2.png", // Replace with your trophy image path
            title: "Your points breakdown",
            description: "See your earning progress",
            linkText: "See points breakdown",
            linkHref: "#",
        },
        {
            icon: "/images/d3.png", // Replace with your treasure chest image path
            title: "Your longest streak: 7",
            description:
                "You’ve earned 405 bonus points by completing daily sets and building streaks. Keep it going!",
            linkText: "Go to daily set",
            linkHref: "#",
        },
    ];
    return (
        <div className="min-h-screen bg-gray-100 py-6 ">
            <Homebar />
            <div>
                <div className="flex flex-col lg:flex-row items-center justify-around bg-gray-100 py-12 px-6 lg:px-16">
                    {/* Lifetime Points Earned */}
                    <div className="flex flex-col items-center text-center">
                        <FaCoins className="text-yellow-500 text-6xl mb-4" />
                        <h2 className="text-4xl font-bold">6,319</h2>
                        <p className="text-gray-600">lifetime points earned</p>
                    </div>

                    {/* User Level */}
                    <div className="flex flex-col items-center text-center">
                        <FaUserCircle className="text-gray-400 text-8xl mb-4" />
                        <h2 className="text-2xl font-bold">Level 1</h2>
                        <div className="w-full max-w-xs bg-gray-300 h-2 rounded-full my-4">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                        <p className="text-gray-600">444 points until Level 2 this month</p>
                    </div>

                    {/* Lifetime Points Redeemed */}
                    <div className="flex flex-col items-center text-center">
                        <FaShoppingCart className="text-red-500 text-6xl mb-4" />
                        <h2 className="text-4xl font-bold">0</h2>
                        <p className="text-gray-600">lifetime points redeemed</p>
                    </div>
                </div>

                <div>
                    <div className="bg-white py-12 mx-14 px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Your badges</h2>
                        <p className="text-gray-600 mb-8">
                            Congrats! You’ve earned 2 badges. Check out the other badges you can unlock.
                        </p>
                        {/* Badges */}
                        <div className="flex justify-center items-center gap-8 mb-8">
                            {/* Badge 1 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-red-500 rounded-md p-4">
                                    <img
                                        src="/images/red.png" // Replace with your badge image path
                                        alt="Badge 1997"
                                        className="w-20 h-20"
                                    />
                                </div>

                            </div>
                            {/* Badge 2 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-blue-500 rounded-full p-4">
                                    <img
                                        src="/images/blue.png" // Replace with your badge image path
                                        alt="Badge 7"
                                        className="w-20 h-20 rounded-full"
                                    />
                                </div>

                            </div>
                        </div>
                        {/* Call-to-Action Button */}
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                            See available badges &gt;
                        </button>
                        {/* Social Sharing */}
                        <div className="flex justify-center items-center gap-4 mt-6">
                            <p className="text-gray-600">Share with your friends</p>
                            <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
                            <FaTwitter className="text-blue-400 text-xl cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-gray-100 py-12 px-6 mx-16">
                        <h2 className="text-3xl font-bold text-center mb-8">Your progress</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-10 text-center"
                                >
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-16 h-16 mx-auto mb-4"
                                    />
                                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-600 mb-4">{card.description}</p>
                                    <a
                                        href={card.linkHref}
                                        className="text-blue-600 font-medium hover:underline"
                                    >
                                        {card.linkText} &gt;
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div>
                <div className="bg-gray-100 py-12 px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Check out your rewards</h2>
                    <p className="text-gray-600 mb-8">
                        Come back here for an overview of your rewards redemptions.
                    </p>
                    <div className="flex justify-center">
                        <img
                            src="/images/p1s.png" // Replace with your cart image path
                            alt="Shopping cart"
                            className="w-32 h-32 mb-6"
                        />
                    </div>
                    <a
                        href="#"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                    >
                        See what you can get &gt;
                    </a>
                </div>
            </div>

        </div>

    );
};
