import CuisineCard from "./CuisineCard";
import { useEffect, useState } from "react";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66770&lng=77.43370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((res) => res.json())
      .then((data) => {
        const restaurantCard = data?.data?.cards?.find(
        (card: any) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurantList =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setCuisines(restaurantList);
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
                    key={item.info.id}
                    name={item.action?.name}
                    cuisines={item.info.cuisine || []}
                    imageId={item.info.cloudinaryImageId}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
