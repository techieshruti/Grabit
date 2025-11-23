type CuisineProps = {
  name: string;
  imageId: string;
};

const CuisineCard = ({ name, imageId }: CuisineProps) => {
  return (
    <div className="flex flex-col items-center min-w-[130px] cursor-pointer">
      {imageId && (
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fill/${imageId}`}
          alt={name}
          className="w-35 h-35 object-cover"
        />
      )}

      {/* <p className="mt-2 text-sm font-medium text-gray-700">{name}</p> */}
    </div>
  );
};

export default CuisineCard;
