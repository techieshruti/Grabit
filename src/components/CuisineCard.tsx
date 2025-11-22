type CuisineProps = {
  name: string;
  cuisines: string[];
  imageId: string;
};

const CuisineCard = ({ name, cuisines, imageId }: CuisineProps) => {
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
/>
    <h3 className="...">{name}</h3>
    <p className="...">{cuisines?.join(", ")}</p>
    </div>
  );
};

export default CuisineCard;
