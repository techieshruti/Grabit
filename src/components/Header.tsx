import logo from "../assets/logo.png";
import { ChevronDown } from "lucide-react";
const Header = () => {
  return (
    <div>
      <div className="bg-red-800 w-full flex items-center justify-between py-3 px-6 text-lg font-medium">

        {/* left */}
        <div className="flex justify-center items-center gap-10 px-4">
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
          <ul className="flex gap-10">
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign In</li>
            <li> Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
