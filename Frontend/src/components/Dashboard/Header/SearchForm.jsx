import { GoSearch } from "react-icons/go";

const SearchForm = () => {
  return (
    <>
      <form className="relative w-full lg:w-[30%] order-1 md:order-none">
        <span className="absolute left-2 top-2 text-2xl text-gray-400">
          <GoSearch />
        </span>
        <input
          className="flex w-full lg:w-[60%] py-2 pl-12 pr-4 text-xl outline-none text-gray-400 rounded-xl"
          type="text"
          name="search"
          id="search"
          placeholder="Buscar"
        />
      </form>
    </>
  );
};

export default SearchForm;
