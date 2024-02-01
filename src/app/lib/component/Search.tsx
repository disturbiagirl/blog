import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="flex items-center h-10 rounded-lg bg-gray-100 m-6 pl-3">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        id="search"
        type="text"
        placeholder="Search posts..."
        className="w-full h-full bg-transparent pl-2 outline-none"
      />
    </div>
  );
};

export default Search;
