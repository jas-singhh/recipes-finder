import React, { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "149c7587662f4bfc966e63537e9508e3";

function Search({ setRecipesData }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      if (query !== "") {
        const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data) {
          setData(data.results);
          setRecipesData(data.results);
          console.log(data.results);
        }
      }
    }

    getData();
  }, [query]);

  return (
    <div className="w-full h-[50px] flex flex-col items-center justify-items-center mt-8">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="p-5 bg-neutral-100 rounded-md w-1/3 shadow-md outline-none transition-transform ease-in-out duration-300 hover:scale-[1.01] active:scale-[0.99]"
      />

      <div className="flex justify-end items-center w-1/3 p-2">
        <p className="text-slate-400 font-light">{data.length} Results</p>
      </div>
    </div>
  );
}

export default Search;
