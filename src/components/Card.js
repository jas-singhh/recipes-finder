import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Card({ id, title, image }) {
  const [open, setOpen] = React.useState(false);
  const [recipe, setRecipe] = React.useState({});

  const URL = "https://api.spoonacular.com/recipes/";
  const API_KEY = "149c7587662f4bfc966e63537e9508e3";

  const getRecipe = async (id) => {
    const response = await fetch(`${URL}${id}/information?apiKey=${API_KEY}`);
    const data = await response.json();

    console.log("data", data);

    return data;
  };

  const handleClick = async () => {
    setOpen(true);

    setRecipe(await getRecipe(id));
  };

  return (
    <div className="w-[350px] h-[500px]  flex flex-col items-center rounded-lg shadow-2xl m-4 bg-gray-100 ">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-scale-cover rounded-t-lg"
      />

      <h1 className="text-2xl font-semibold mt-3 text-slate-600 tracking-wider flex-1 text-center">
        {title}
      </h1>

      <button
        className="bg-slate-800 my-5 p-4 rounded-md text-white font-semibold w-1/2 
      shadow-lg transition duration-300 ease-in-out hover:bg-slate-700 hover:scale-[1.01] active:scale-[0.99]"
        onClick={handleClick}
      >
        See Recipe
      </button>

      <Popup open={open}>
        <div className="w-full h-full flex items-center ">
          <div className="flex-1">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-scale-cover shadow-md"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold mt-3 text-slate-600 tracking-wider text-center p-6">
              {title}
            </h1>

            <p className="text-md font-semibold mt-3 text-slate-600 tracking-wider text-start p-6 flex-1">
              Instructions: {recipe.instructions}
            </p>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Card;
