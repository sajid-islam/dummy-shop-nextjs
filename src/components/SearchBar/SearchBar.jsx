import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <>
      <CiSearch size={20} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
      <Input placeholder="Search for product" className="rounded-full placeholder:text-sm" />
    </>
  );
};

export default SearchBar;
