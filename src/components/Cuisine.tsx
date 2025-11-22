import CuisineCard from "./CuisineCard";
import { useEffect, useState } from "react";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.6139&lng=77.2090")
      .then((res) => res.json())
      .then((data) => {
        const cuisineData =
          data?.data?.cards[1]?.card?.card?.imageGridCards?.info;
        setCuisines(cuisineData);
      })
      .catch((err) => console.error("Error:", err));
  }, []);
  
  return (
    <div className="flex justify-center ">
      <div className="w-3/4 px-4 py-4 border-b-2 border-b-gray-300">

      {/* Title */}
        <h1 className="font-bold text-xl py-4">What's on your mind?</h1>

{/* Scrollable Section */}
        <div className="overflow-x-auto">
            <div className="flex gap-8 py-4">
                {cuisines.map((item) => (
                    <CuisineCard
                    key={item.id}
                    name={item.name}
                    image={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
