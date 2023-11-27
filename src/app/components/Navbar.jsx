"use client";
import React, { useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { roboto_slab } from "@/app/fonts";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
  };

  const onSearched = () => {
    setSearch(!search);
  };

  return (
    <main className="w-full h-12 px-2 py-2 md:px-8">
      <div className="w-full flex justify-between items-center">
        <div className="h-10 flex justify-center items-center space-x-8">
          <div className="hidden lg:block">
            <ul className=" flex space-x-5 font-semibold">
              <li>Home</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div onClick={handleOnClick} className="lg:hidden absolute">
            {active ? (
              <RxCross2 className="cursor-pointer text-2xl relative" />
            ) : (
              <GiHamburgerMenu className="cursor-pointer text-2xl relative" />
            )}
          </div>
          {active && (
            <ul className="absolute top-12 left-0 flex flex-col md:flex-row md:space-x-6 bg-[#b08968] text-black font-semibold px-4 py-2 rounded-lg">
              <li>Home</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          )}
        </div>
        <div>
          <h1
            className={`text-xl md:text-2xl lg:text-3xl ${roboto_slab.className}`}
          >
            EXERY
          </h1>
        </div>
        <div className="w-20 lg:w-52 flex justify-between items-center">
          <div className="w-8 lg:w-32 lg:bg-gray-700 rounded-3xl flex justify-center lg:justify-normal items-center lg:pl-2">
            <CiSearch
              className="text-2xl md:text-3xl relative"
              onClick={onSearched}
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="hidden lg:block w-0 lg:w-16 bg-transparent lg:pl-2 outline-none"
            />
            {search && (
              <input
                type="text"
                placeholder="Search Here"
                className="lg:hidden absolute w-32 md:w-44 h-8 md:h-12 border-2 top-10 md:top-12 rounded-xl md:rounded-2xl bg-transparent outline-none px-2 md:px-4"
              />
            )}
          </div>
          <div className="flex">
            <CiHeart className="text-2xl md:text-4xl" />
            <CiShoppingCart className="text-2xl md:text-4xl" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
