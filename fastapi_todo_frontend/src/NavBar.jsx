import React from "react";

const NavBar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="flex justify-between px-[5%] py-4">
      <p className="text-2xl font-semibold">My Todo ✅
        <span className="text-xs italic text-gray-500 font-normal">v1.0</span>
      </p>
      <button
        onClick={handleRefresh}
        className="px-5 py-2 rounded-2xl bg-white text-gray-600 shadow cursor-pointer hover:scale-105 transition-all delay-150 ease-in-out duration-200"
      >
        Refresh
      </button>
    </div>
  );
};

export default NavBar;
