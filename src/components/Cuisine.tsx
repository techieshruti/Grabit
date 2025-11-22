import northindian from "../assets/northindian.png";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";
import CuisineCard from "./CuisineCard";

const cuisineList=[
    {id:1, name:"North Indian", image: northindian},
    {id:2, name:"Burgers", image: burger},
    {id:3, name:"Pizzas", image: pizza},
    {id:4, name:"Pizzas", image: pizza},
    {id:5, name:"Pizzas", image: pizza},
    {id:6, name:"Pizzas", image: pizza},
    {id:8, name:"Pizzas", image: pizza},
    {id:9, name:"Pizzas", image: pizza},
    {id:10, name:"Pizzas", image: pizza},
    {id:11, name:"Pizzas", image: pizza},
];

const Cuisine = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-3/4 px-4 py-4 border-b-4 border-b-gray-300">

      {/* Title */}
        <h1 className="font-bold text-xl py-4">What's on your mind?</h1>

{/* Scrollable Section */}
        <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 py-4">
                {cuisineList.map((item) => (
                    <CuisineCard
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
