import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar produto"
        className="search__input"
        required
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
