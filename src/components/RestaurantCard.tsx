import { Star } from "lucide-react";

type RestaurantCardProps ={
  image: string,
  title: string,
  rating: number,
  cuisine: string,
  area: string
}

const RestaurantCard = ({image, title, rating, cuisine, area}: RestaurantCardProps) => {
  return (
    <section className="flex justify-center">
      <div className="w-3/4 bg-amber-700">
        <div className="w-60 bg-blue-300 rounded-2xl overflow-hidden shadow-md">

          {/* restaurant-image */}
          <div className="bg-amber-300 w-full h-40">
            <img 
            className="w-full h-full object-cover" src={image} 
            alt={title} />
          </div>

          {/* restaurant-info */}
          <div className="p-3">
            <h1 className="bg-gray-500 text-lg font-bold">{title}</h1>

            {/* restaurant rating info */}
            <div className="flex items-center gap-2">
              <Star size={16} fill="green" color="green" />
              <span>{rating}</span>
            </div>

            {/* Cuisines */}
            <p className="text-sm text-gray-600 truncate">{cuisine}</p>

            {/* area */}
            <p className="text-sm text-gray-500">{area}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantCard;
