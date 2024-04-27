// Autor: @elsoprimeDEV
import SearchForm from "./SearchForm";
import Profile from "./Profile";

const Header = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 md:pl-12">
        {/** Form Buscar */}
        <SearchForm />
        {/** Notify and Profile User */}
        <Profile />
      </header>
    </>
  );
};

export default Header;
