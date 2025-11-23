import CuisineCard from "./CuisineCard";
import { useEffect, useState } from "react";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66770&lng=77.43370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((res) => res.json())
      .then((data) => {
        const cards = data?.data?.cards;

      // STEP 2: Find the "What's on your mind?" card
      const whatsOnYourMindCard = cards.find(
        (item: any) => item?.card?.card?.id === "whats_on_your_mind"
      );

      // STEP 3: Extract only its cuisine items
      const cuisines =
        whatsOnYourMindCard?.card?.card?.imageGridCards?.info || [];

      setCuisines(cuisines);
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
                    name={item.action?.name}
                    imageId={item.ImageId}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
