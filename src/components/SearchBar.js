import React from "react";
import { useSelector } from "react-redux";
import { config } from "tailwind-scrollbar-hide";
import { lang } from "../utils/constants";

const SearchBar = () => {
  const lgKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-6/12 h-20 justify-center items-center">
      <div className="flex justify-center items-center h-full w-full ">
        <input
          type="text"
          placeholder={lang[lgKey].getPlaceholderText}
          className="w-6/12 px-3 py-2 rounded-l-full placeholder:text-lg border-r-2"
        />
        <button className="px-3  placeholder:text-xl py-2 font-semibold rounded-r-2xl bg-white">
          {lang[lgKey].search}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
