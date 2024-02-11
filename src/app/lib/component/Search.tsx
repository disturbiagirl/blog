"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { fetchPosts } from "../data";
import Link from "next/link";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const posts = await fetchPosts();
    setData(posts);
    setFilteredData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    const filteredPosts = data.filter((post: { title: string }) =>
      post.title.toLowerCase().includes(searchText)
    );
    setFilteredData(filteredPosts);
    setSearchTerm(searchText);
    console.log(filteredData);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <div className="flex items-center h-10 pl-3 m-6 bg-gray-100 rounded-lg">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          id="search"
          type="text"
          placeholder="Search posts by title..."
          className="w-full h-full pl-2 bg-transparent outline-none"
          onChange={(e) => handleChange(e)}
          value={searchTerm}
          onClick={handleClear}
        />
      </div>
      <div className="pl-6 pr-6">
        {filteredData.map((post: any) => {
          if (searchTerm !== "") {
            return (
              <div
                key={post.id}
                className="p-6 mt-3 mb-3 bg-gray-100 rounded-lg"
              >
                <Link href={`/${post.id}`} className=" hover:text-sky-700">
                  <h2>{post.title}</h2>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Search;
