import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptSearchPageToogle } from "../slices/gptSlice";
import { changeLanguage } from "../slices/configSlice";

const Header = () => {
  const toggleSelect = useSelector(store => store.gpt.showSearchPage);
  const handleSelect = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
  const dispatch = useDispatch();
  const handleSearchPage = () => {
    dispatch(addGptSearchPageToogle());
  };
  return (
      <div className="flex justify-between w-full bg-black px-5 py-1 items-center">
        <div className="px-10 w-full text-white z-10 ">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            alt="logo"
            className="h-12"
          />
        </div>
        <div className="cursor-pointer flex gap-2">
          {toggleSelect && <select className="bg-black text-white font-semibold text-lg rounded-md shadow-lg" onClick={handleSelect}>
            <option>English</option>
            <option>Hindi</option>
          </select>}
          <button
            className="bg-[#ff2508] text-white cursor-pointer w-28 px-2 py-2 rounded-md shadow-lg"
            onClick={handleSearchPage}
          >
            {toggleSelect ? 'Home' : 'Search GPT'}
          </button>
        </div>
      </div>
  );
};

export default Header;
