import React from "react";

interface Reward {
  id: number;
  image: string;
  title: string;
  description: string;
  points: string;
}

const rewards: Reward[] = [
  {
    id: 1,
    image: "/images/card1.png", // Replace with actual image path
    title: "Roblox Digital Card—400 Robux",
    description: "Redeem for 6,000 points",
    points: "6,000 points",
  },
  {
    id: 2,
    image: "/images/card1.png",
    title: "Roblox Digital Card—800 Robux",
    description: "Redeem for 12,000 points",
    points: "12,000 points",
  },
  {
    id: 3,
    image: "/images/card1.png",
    title: "Roblox Digital Card—1000 Robux",
    description: "Redeem for 15,000 points",
    points: "15,000 points",
  },
  {
    id: 4,
    image: "/images/card1.png",
    title: "League of Legends Gift Card—575 RP",
    description: "Redeem for 6,500 points",
    points: "6,500 points",
  },
];

const SuggestedRewards: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Suggested rewards</h2>
          <a
            href="#"
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            See all rewards &gt;
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={reward.image}
                alt={reward.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 pt-10">
                <h3 className="text-sm font-bold mb-2">{reward.title}</h3>
                <p className="text-blue-500 text-sm font-medium hover:underline pt-20">
                  {reward.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedRewards;
