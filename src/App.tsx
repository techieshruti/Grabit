import { useState } from "react";

import Header from './components/Header'
import Cuisine from './components/Cuisine'
import RestaurantList from "./components/RestaurantList";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header searchText={searchText} setSearchText={setSearchText}/>
      <Cuisine/>
      <RestaurantList searchText={searchText}/>
    </div>
  )
}

export default App