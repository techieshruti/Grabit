import logo from "../assets/logo.png";
import { ChevronDown, Search, BadgePercent, Headset,User,CookingPot } from "lucide-react";
const Header = () => {
  return (
    <div className="text-lg font-medium">
      <div className="bg-[#f7e1d0] w-full flex items-center justify-between py-3 px-20">

        {/* left */}
        <div className="flex justify-center items-center gap-10">
          {/* logo */}
          <img className="w-15 rounded-2xl" src={logo} alt="Grabit Logo" />
          {/* location */}
          <div className="underline flex">
            <h1>Other</h1>
            <ChevronDown />
          </div>
        </div>

        {/* right */}
        <div>
          <ul className="flex gap-12">
            <li className="flex gap-2 cursor-pointer hover:text-amber-800"><Search/>Search</li>
            <li className="flex gap-2 cursor-pointer hover:text-amber-800"><BadgePercent/>Offers</li>
            <li className="flex gap-2 cursor-pointer hover:text-amber-800"><Headset />Help</li>
            <li className="flex gap-2 cursor-pointer hover:text-amber-800"><User/>Sign In</li>
            <li className="flex gap-2 cursor-pointer hover:text-amber-800"><CookingPot/>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
