"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: string) => {
    setSearchTerm(e);
    console.log(searchTerm);
  };

  return (
    <div className="flex items-center h-10 pl-3 m-6 bg-gray-100 rounded-lg">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        id="search"
        type="text"
        placeholder="Search posts..."
        className="w-full h-full pl-2 bg-transparent outline-none"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
