import React from "react";

const ResponsiveCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Card */}
        <div className="lg:col-span-2 flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
          <div className="text-6xl mb-4">🌊</div>
          <h2 className="text-2xl font-bold mb-2">Ocean insights</h2>
          <p className="text-gray-600 mb-4">Discover fascinating facts about the Pacific Ocean</p>
          <div className="text-blue-600 font-semibold cursor-pointer">5 points &gt;</div>
        </div>

        {/* Smaller Cards */}
        <div className="flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
          <div className="text-6xl mb-4">☀️</div>
          <h2 className="text-2xl font-bold mb-2">Beach checklist</h2>
          <p className="text-gray-600 mb-4">Get ready for your trip with this essential packing list</p>
          <div className="text-blue-600 font-semibold cursor-pointer">5 points &gt;</div>
        </div>

        <div className="flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
          <div className="text-6xl mb-4">🎥</div>
          <h2 className="text-2xl font-bold mb-2">French Cinema Legend?</h2>
          <p className="text-gray-600 mb-4">Challenge yourself on the enigmatic Isabelle Huppert!</p>
          <div className="text-blue-600 font-semibold cursor-pointer">5 points &gt;</div>
        </div>

        <div className="flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold mb-2">Book Recommendations</h2>
          <p className="text-gray-600 mb-4">Explore the best books to read this month</p>
          <div className="text-blue-600 font-semibold cursor-pointer">5 points &gt;</div>
        </div>

        <div className="flex flex-col items-start p-8 border border-gray-300 rounded-lg shadow-lg h-96">
          <div className="text-6xl mb-4">🍎</div>
          <h2 className="text-2xl font-bold mb-2">Healthy Eating Tips</h2>
          <p className="text-gray-600 mb-4">Learn how to maintain a balanced diet</p>
          <div className="text-blue-600 font-semibold cursor-pointer">5 points &gt;</div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCards;
