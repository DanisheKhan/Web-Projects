import React from "react";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = ({ onOpen, filterContacts }) => {
  const handleSearch = (event) => {
    filterContacts(event.target.value);
  };

  return (
    <>
      <nav className="rounded-b-2xl text-center p-5 backdrop-blur-2xl">
        <h1 className="flex items-center justify-center gap-4 text-2xl font-bold">
          <MdOutlineDeveloperMode />
          <span>Developed By Danish Khan</span>
        </h1>
        <p className="font-thin">U can store your Name and Password here!</p>
      </nav>
      <div className="flex items-center justify-center gap-4 mt-5">
        <div className="relative flex items-center w-full max-w-md">
          <IoIosSearch className="absolute left-3 text-2xl text-gray-500" />
          <input
            type="text"
            className="border pl-10 pr-4 border-white bg-transparent rounded-full h-10 w-full"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
        <IoAddOutline onClick={onOpen} className="text-4xl cursor-pointer" />
      </div>
    </>
  );
};

export default Navbar;
