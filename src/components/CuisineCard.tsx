type CuisineProps = {
  name: string;
  imageId: string;
};

const CuisineCard = ({ name, imageId }: CuisineProps) => {
  return (
    <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
      {/* <img
        src={image}
        alt={name}
        className="w-30 rounded-full object-fit"
      />
      <p className="mt-2 text-gray-600 text-lg font-medium">{name}</p> 
      */}

      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
        alt={name}
        className="w-28 h-28 rounded-full object-cover"
      />

      <p className="mt-2 text-sm font-medium text-gray-700">
        {name}
      </p>
    </div>
  );
};

export default CuisineCard;
