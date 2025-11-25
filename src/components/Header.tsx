import logo from "../assets/logo.png";
import {
  ChevronDown,
  Search,
  BadgePercent,
  Headset,
  User,
  CookingPot,
} from "lucide-react";

const navItems = [
  { label: "Search", icon: Search },
  { label: "Offers", icon: BadgePercent },
  { label: "Help", icon: Headset },
  { label: "Sign In", icon: User },
  { label: "Cart", icon: CookingPot },
];

const Header = () => {
  return (
    <div className="bg-[#f7e9df] text-lg font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-20">
        
        {/* Left Section*/}
        <div className="flex gap-10">
          {/* Logo */}
          <img className="w-14 rounded-2xl" src={logo} alt="Grabit Logo" />

          {/* Location */}
          <div className="flex items-center gap-1 underline cursor-pointer hover:text-[#f27318]">
            <span>Other</span>
            <ChevronDown size={18} />
          </div>
        </div>

        {/* right section */}
        <ul className="flex gap-12">
          {navItems.map((item, index) => {
            let Icon = item.icon;
            return (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:text-[#f27318] transition-colors"
              >
                <Icon size={20} />
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
