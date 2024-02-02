"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex items-center h-10 rounded-lg bg-gray-100 m-6 pl-3">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        id="search"
        type="text"
        placeholder="Search posts..."
        className="w-full h-full bg-transparent pl-2 outline-none"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
