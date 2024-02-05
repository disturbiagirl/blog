"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// import { useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    // const [url, setUrl] = useState("");
    // // setUrl(term);
    console.log(term);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    console.log(params.toString());
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex items-center h-10 pl-3 m-6 bg-gray-100 rounded-lg">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        id="search"
        type="text"
        placeholder="Search posts..."
        className="w-full h-full pl-2 bg-transparent outline-none"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
