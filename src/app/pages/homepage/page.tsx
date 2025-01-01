// pages/index.tsx
import React from "react";
import Image from "next/image";
import ResponsiveCards from "@/app/components/cards/page";
import { FaFutbol, FaGift } from "react-icons/fa";
import SuggestedRewards from "@/app/components/secondcards/page";

const HomePage = () => {

    return (
        <div className="min-h-screen bg-gray-100 py-10 ">
            <div className="  py-4 bg-gradient-to-r from-blue-300 to-cyan-100">
                <div className=" p-6  ">
                    <h1 className="text-3xl mb-4 md:ml-16 font-bold text-gray-800">Welcome</h1>
                    <p className="text-gray-600 md:ml-16 ">Level 2 <span className="text-gray-500">
                        ©</span></p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 md:pl-8 pr-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center md:p-2">
                                <Image className="pb-8" src="/images/m1.png" alt="Available Points" width={60} height={60} />
                                <div className="">
                                    <p className="text-gray-600">Available points <span className="text-gray-500">ℹ</span></p>
                                    <div className="text-4xl font-bold text-gray-800">6,207</div>
                                    <a href="#" className="text-blue-600 hover:underline">Redeem</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center md:p-2">
                                <Image className="pb-8" src="/images/m2.png" alt="Auto-redeem" width={50} height={50} />
                                <div className="">
                                    <p className="text-gray-600">Auto-redeem <span className="text-gray-500">ℹ</span></p>
                                    <div className="text-4xl font-bold text-gray-800">-</div>
                                    <a href="#" className="text-blue-600 hover:underline">Setup</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center md:p-2">
                                <Image className="pb-8" src="/images/m3.png" alt="Today's Points" width={60} height={60} />
                                <div className="">
                                    <p className="text-gray-600">Today's points <span className="text-gray-500">ℹ</span></p>
                                    <div className="text-4xl font-bold text-gray-800">2</div>
                                    <a href="#" className="text-blue-600 hover:underline">Points breakdown</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center md:p-2">
                                <Image className="pb-8" src="/images/m4.png" alt="Streak Count" width={60} height={60} />
                                <div className="">
                                    <p className="text-gray-600">Streaks counts <span className="text-gray-500">ℹ</span></p>
                                    <div className="text-4xl font-bold text-gray-800">0</div>
                                    <div className="flex items-center justify-center mt-2">
                                        <span className="text-gray-600 bg-gray-300 rounded-full px-2">OFF</span>
                                        <button className="ml-2 hover:bg-gray-100 rounded-full  py-1 text-sm">Streak protection</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>










            </div>
            <section>
                <div className="items-center text-center mt-4">
                    <button className="p-3 hover:bg-blue-500">Earn</button>
                    <button className="p-3 hover:bg-blue-500">Redeem</button>
                    <button className="p-3 hover:bg-blue-500">Status</button>

                </div>
                <div className="justify-between flex px-20 mt-4">
                    <div><span>Daily Set</span></div>
                    <div> <span className="text-gray-600 bg-gray-300 rounded-full px-2">OFF</span>
                        <button className="ml-2 hover:bg-gray-100 rounded-full  py-1 text-sm">Streak protection</button>
                    </div>
                </div>

                <div className="justify-between flex px-20 mt-4">
                    <div>GO BACK TO TODAY'S SET</div>
                    <div>SNEAK PEEK AT TOMORROW'S SET</div>
                </div>
                <ResponsiveCards />

                <div className="container mx-auto px-4 py-8">
                    <div className=" p-6  flex flex-col items-center">
                        <div className="flex items-center w-full justify-between">
                            {/* Current Day Streak */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 flex items-center justify-center bg-yellow-400 text-white font-bold text-3xl rounded-full">
                                    0
                                </div>
                                <p className="text-gray-600 mt-2 text-sm">Current day streak</p>
                            </div>

                            {/* Progress Bar */}
                            <div className="flex-1 mx-4 flex items-center">
                                <div className="flex items-center w-full">
                                    <div className="h-1 bg-gray-300 w-full relative">
                                        <div className="absolute top-0 left-0 h-1 w-1/3 bg-gray-400"></div>
                                    </div>
                                </div>
                                <div className="w-4 h-4 bg-gray-300 rounded-full ml-2"></div>
                            </div>

                            {/* Streak Bonus */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 flex items-center justify-center bg-gray-200 text-gray-500 font-bold text-3xl rounded-full">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <p className="text-gray-600 mt-2 text-sm">Streak bonus</p>
                            </div>
                        </div>

                        {/* Explanatory Text */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-600 text-sm">
                                Oh no, you missed a day and reset your streak! <span className="font-bold">Complete today's set to start a new 3-day streak</span> and unlock a 45-point bonus.
                            </p>
                        </div>
                    </div>
                </div>





            </section>
            <section>
                <div className="container mx-auto px-4 py-3 bg-gray-100  ">
                    <div className="text-2xl font-bold mb-4">More Activities</div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                        <div className="flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
                            <div className="text-6xl mb-4">🎨</div>
                            <h2 className="text-2xl font-bold mb-2">Art and Creativity</h2>
                            <p className="text-gray-600 mb-4">Dive into the world of artistic expression and creativity.</p>
                            <div className="text-blue-600 font-semibold cursor-pointer pt-6">5 points &gt;</div>
                        </div>


                        <div className="flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
                            <div className="text-6xl mb-4">🌍</div>
                            <h2 className="text-2xl font-bold mb-2">Travel Adventures</h2>
                            <p className="text-gray-600 mb-4">Discover exciting travel destinations for your next adventure.</p>
                            <div className="text-blue-600 font-semibold cursor-pointer pt-6">5 points &gt;</div>
                        </div>


                        <div className="flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
                            <div className="text-6xl mb-4">💪</div>
                            <h2 className="text-2xl font-bold mb-2">Fitness Motivation</h2>
                            <p className="text-gray-600 mb-4">Boost your fitness journey with tips and motivation.</p>
                            <div className="text-blue-600 font-semibold cursor-pointer pt-6">5 points &gt;</div>
                        </div>

                    </div>
                </div>
            </section>



            <div className="bg-gray-100 py-10 ">
                <div className="text-xl font-bold mb-4 mx-20">Your goal</div>
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Your Goal Section */}
                    <div className="bg-white p-6 shadow-md rounded-lg flex items-center">
                        <FaFutbol className="text-4xl text-gray-500 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold mb-2">You haven't set a goal yet</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Start earning towards a redemption goal
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 text-sm font-medium hover:underline"
                            >
                                Set goal &gt;
                            </a>
                        </div>
                    </div>

                    {/* Your Last Reward Section */}
                    <div className="bg-white p-6 shadow-md rounded-lg flex items-center">
                        <FaGift className="text-4xl text-yellow-500 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold mb-2">You haven't redeemed yet</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                See what you can redeem today.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 text-sm font-medium hover:underline"
                            >
                                Redeem now &gt;
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <section>
                <SuggestedRewards />
            </section>












        </div>
    );
};

export default HomePage;




