import React from "react";

function Header() {
  return (
    <>
      <header className="w-screen bg-transparent backdrop-blur-md border-b border-white/20 shadow-md ">
        <div className="flex justify-space-between h-[100px] items-center max-w-screen-lg mx-auto ">
          <h1 className="text-3xl font-bold flex-1 text-gray-200 tracking-wider">
            Foodilicious
          </h1>

          <p className="text-lg  text-gray-400 tracking-wider">
            Find your favorite meals
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
