import { useState } from "react";
import Header from "./components/Header";
import Cuisine from "./components/Cuisine";
import RestaurantList from "./components/RestaurantList";
import HelpBot from "./components/HelpBot";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header setIsHelpOpen={setIsHelpOpen} />

      <Cuisine />

      <RestaurantList 
        searchText={searchText} 
        setSearchText={setSearchText} 
      />

      <HelpBot
        isHelpOpen={isHelpOpen}
        setIsHelpOpen={setIsHelpOpen}
        setSearchText={setSearchText}
      />
    </div>
  );
};

export default App;
