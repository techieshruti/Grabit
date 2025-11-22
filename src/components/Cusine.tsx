import northindian from "../assets/northindian.png"
import burger from "../assets/burger.png"
import pizza from "../assets/pizza.png"

const Cusine = () => {
  return (
    <div className='flex justify-center '>
        <div className='w-3/4 px-4 py-4 border-b-4 border-b-gray-400'>
            <h1 className="font-bold text-xl py-2">What's on your mind?</h1>

            <div className="px-2 py-6">
                <ul className="flex gap-6 items-center text-xl text-gray-600">
                    <li>
                        <img className="w-30 rounded-full" src={northindian} alt="" />
                        <p>North Indian</p>
                    </li>
                    <li>
                        <img className="w-30 rounded-full" src={burger} alt="" />
                        <p>Burgers</p>
                    </li>
                    <li>
                        <img className="w-30 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                    <li>
                        <img className="w-30 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                    <li>
                        <img className="w-30 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                    <li>
                        <img className="w-30 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cusine