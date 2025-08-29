"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";

const SearchBar = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim()) {
      router.push(`/search/${text}`);
    }
  };

  // Handle button click
  const handleSearch = () => {
    if (text.trim()) {
      router.push(`/search/${text}`);
    }
  };

  return (
    <>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for product"
        className="rounded-full placeholder:text-sm pr-10"
      />
      <button
        onClick={handleSearch}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <CiSearch size={20} />
      </button>
    </>
  );
};

export default SearchBar;
