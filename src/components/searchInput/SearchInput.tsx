import React from "react";
import searchIcon from '../../assets/search-icon.svg'
import { SearchInputProps } from "../../interfaces";

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onSearch,
}) => {
  const [value, setValue] = React.useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full mx-2 shadow px-4 py-2 w-full max-w-36 h-10">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 w-[90px]"
      />
      <img src={searchIcon} alt="search-icon" className="text-green-500 text-2xl cursor-pointer"  />
    </div>
  );
};
