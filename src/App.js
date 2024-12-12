import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  const [recipesData, setRecipesData] = useState([]);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-900 via-brown-800 to-black overflow-y-auto">
      <Header />
      <Search setRecipesData={setRecipesData} />

      <div className="grid grid-cols-3 gap-2 max-w-screen-xl mx-auto mt-10 ">
        {recipesData.map((recipe) => (
          <Card key={recipe.id} title={recipe.title} image={recipe.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
