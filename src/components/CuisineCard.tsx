type CuisineProps = {
  name: string;
  image: string;
};

const CuisineCard = ({ name, image }: CuisineProps) => {
  return (
    <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-30 rounded-full object-fit"
      />
      <p className="mt-2 text-gray-600 text-lg font-medium">{name}</p>
    </div>
  );
};

export default CuisineCard;
