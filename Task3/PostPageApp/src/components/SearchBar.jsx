import { useState } from "react";
import { useSelector } from "react-redux";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const { list } = useSelector((state) => state.posts);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="🔍 Search posts..."
      className="w-full p-2 mb-6 border rounded-lg focus:ring focus:ring-blue-300"
    />
  );
}

export default SearchBar;
