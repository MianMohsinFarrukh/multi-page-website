// pages/index.tsx
import React from "react";
import Image from "next/image";

const HomePage = () => {
    return (
        <div className="min-h-screen ">
            <main className="  py-4 bg-gradient-to-r from-blue-300 to-cyan-100">
                <div className=" p-6  ">
                    <h1 className="text-3xl mb-4 md:ml-16 font-bold text-gray-800">Welcome</h1>
                    <p className="text-gray-600 md:ml-16 ">Level 2 <span className="text-gray-500">ℹ</span></p>
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
                                    <p className="text-gray-600">Streak count <span className="text-gray-500">ℹ</span></p>
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
            </main>
        </div>
    );
};

export default HomePage;




