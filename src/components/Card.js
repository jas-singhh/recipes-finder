import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Card({ title, image }) {
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

      <Popup
        trigger={
          <button
            className="bg-slate-800 my-5 p-4 rounded-md text-white font-semibold w-1/2 
      shadow-lg transition duration-300 ease-in-out hover:bg-slate-700 hover:scale-[1.01] active:scale-[0.99]"
          >
            See Recipe
          </button>
        }
        modal
      >
        <div className="w-full h-full flex items-start ">
          <div className="flex-1">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-scale-cover shadow-md"
            />
          </div>

          <div>
            <h1 className="text-3xl font-semibold mt-3 text-slate-600 tracking-wider text-center p-6 flex-1">
              {title}
            </h1>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Card;
