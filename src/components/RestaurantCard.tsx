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
    <div className="w-55 h-[320px] rounded-2xl overflow-hidden shadow-md bg-white hover:scale-[0.97] transition-all duration-300">

      {/* Image Section */}
      <div className="w-full h-40">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>

      {/* Info Section */}
      <div className="p-3 flex flex-col justify-between h-[150px]">

        {/* Top Info */}
        <div>
          <h1 className="text-xl font-bold line-clamp-2">
            {title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <Star size={14} fill="green" color="green" />
            <span className="text-sm font-medium">{rating}</span>
          </div>

          {/* Cuisines */}
          <p className="text-base text-gray-800 line-clamp-1 mt-1">
            {cuisine}
          </p>
        </div>

        {/* Bottom Area */}
        <p className="text-base text-gray-800">{area}</p>

      </div>
    </div>
  );
};

export default RestaurantCard;
