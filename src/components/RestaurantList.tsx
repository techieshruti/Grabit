// components/RestaurantList.tsx
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantList = () => {

  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66770&lng=77.43370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((res) => res.json())
      .then((data) => {

        const cards = data?.data?.cards;

        // Extract restaurant array safely
        const restaurantData =
          cards
            ?.map((card: any) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            .flat()
            .filter(Boolean) || [];

        setRestaurants(restaurantData);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <section className="flex justify-center">
      <div className="w-3/4">

        <h1 className="text-2xl font-bold my-4">Restaurants Near You</h1>

        <div className="flex flex-wrap gap-6">
          {restaurants.map((res) => (
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
    </section>
  );
};

export default RestaurantList;
