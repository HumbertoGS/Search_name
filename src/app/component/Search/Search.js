import { useState } from "react";

import { FaSearch } from "react-icons/fa";

const Search = ({ consult }) => {
  const search = () => {
    const { value } = document.getElementById("busqueda");
    consult(value);
  };

  return (
    <>
      <div className="h-56 m-auto flex justify-center items-center">
        <div className="">
          <h2 className="py-2">Ey!!, Any name/code to look for?</h2>
          <input
            className="bg-gray-200 shadow-lg text-center border-2 border-gray-600 rounded-tl-md rounded-bl-md w-80 h-9 align-middle 
                        dark:bg-slate-400 dark:text-slate-100 dark:border-slate-800"
            type="text"
            id="busqueda"
          />
          <button
            className="bg-gray-200 shadow-lg border-2 border-gray-600 rounded-tr-md rounded-br-md px-2 h-9 w-9 -m-1 align-middle 
                            dark:bg-slate-400 dark:border-slate-800"
            onClick={search}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
