import northindian from "../assets/northindian.png"
import burger from "../assets/burger.png"
import pizza from "../assets/pizza.png"

const Cusine = () => {
  return (
    <div className='flex'>
        <div className='w-3/4 bg-amber-600 '>
            <h1>What's on your mind?</h1>
            <div>
                <ul className="flex gap-4 justify-center items-center">
                    <li>
                        <img className="w-20 rounded-full" src={northindian} alt="" />
                        <p>North Indian</p>
                    </li>
                    <li>
                        <img className="w-20 rounded-full" src={burger} alt="" />
                        <p>Burgers</p>
                    </li>
                    <li>
                        <img className="w-20 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                    <li>
                        <img className="w-20 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                    <li>
                        <img className="w-20 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                    <li>
                        <img className="w-20 rounded-full" src={pizza} alt="" />
                        <p>Pizzas</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cusine