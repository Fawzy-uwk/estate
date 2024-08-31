import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="sBar w-full">
      <div>
        {types.map((type) => (
          <button
            key={type}
            className={`border border-[#9ec37c] border-b-0 px-7 py-2 capitalize  ${
              query.type === type ? "bg-[#9ec37c] text-white" : ""
            }`}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="Wanted Location"
          className="border border-r-0"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="border-r-0"
        />
        <input type="number" name="maxPrice" placeholder="Max Price" />
        <button className="px-6 border-none bg-[#d1b899]">
          <FaSearch color="white" size={22} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
