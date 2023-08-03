import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import fetchProduct from "../../api/fetchProduct";
import { AppContext } from "../../context/AppContext";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState()
  const {setProducts} = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const products = await fetchProduct(searchValue)
    setProducts(products)
    setSearchValue('')
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
