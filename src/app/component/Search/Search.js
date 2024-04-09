import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="h-56 m-auto flex justify-center items-center">
        <div className="">
          <h2 className="py-2">Ey!!, Any name to look for?</h2>
          <input
            className="bg-gray-200 shadow-lg text-center border-2 border-gray-600 rounded-tl-md rounded-bl-md w-80 h-9 align-middle 
                        dark:bg-slate-400 dark:text-slate-100 dark:border-slate-800"
          />
          <button
            className="bg-gray-200 shadow-lg border-2 border-gray-600 rounded-tr-md rounded-br-md px-2 h-9 w-9 -m-1 align-middle 
                            dark:bg-slate-400 dark:border-slate-800"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
