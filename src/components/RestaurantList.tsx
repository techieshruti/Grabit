import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import HelpBot from "./HelpBot";

const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantList = () => {

  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66770&lng=77.43370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((res) => res.json())
      .then((data) => {

        const cards = data?.data?.cards;

        const restaurantData =
          cards
            ?.map((card: any) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            .flat()
            .filter(Boolean) || [];
            console.log("All Restaurants:", restaurantData);

        setRestaurants(restaurantData);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  // ✅ SEARCH FILTER LOGIC
  const filteredRestaurants = restaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  console.log("Filtered Restaurants:", filteredRestaurants); 
  console.log("Search text:", searchText);

  return (
    <section className="flex justify-center">
      <div className="w-3/4">

        <h1 className="text-2xl font-bold my-4">Restaurants Near You</h1>

        {/* ✅ Search box */}
        <div className="mb-6">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
            className="border px-4 py-2 rounded-md w-80 outline-none focus:ring-2 focus:border-0 focus:ring-[#f27318]"
          />
          
        </div>

        {/* ✅ Cards */}
        <div className="flex flex-wrap gap-6">
          {filteredRestaurants.map((res) => (
            <RestaurantCard
              key={res.info.id}
              image={IMG_URL + res.info.cloudinaryImageId}
              title={res.info.name}
              rating={res.info.avgRating}
              cuisine={res.info.cuisines.join(", ")}
              area={res.info.areaName}
            />
          ))}
        </div>

      </div>
          <HelpBot setSearchText={setSearchText} />

    </section>
    
  );
};

export default RestaurantList;
