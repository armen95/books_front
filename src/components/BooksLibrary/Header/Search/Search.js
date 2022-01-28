import "./search.scss";
import SearchIconLightMode from "../../../../assets/images/search-icon-light-mode.svg";
import SearchIconDarkMode from "../../../../assets/images/search-icon-dark-mode.svg";
import CloseIcon from "../../../../assets/images/close-icon.svg";
import { useRef, useEffect } from "react";

export default function Search({
  searchValue,
  setSearchValue,
  placeholder = "",
  setOpenSearch,
  openSearch,
  darkMode
}) {
  const searchRef = useRef(null);

  useEffect(() => {
    if (openSearch) {
      function handleClickOutside(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setOpenSearch(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [searchRef]);

  return (
    <div className="search_block" ref={searchRef}>
      {searchValue && (
        <img src={CloseIcon} onClick={() => setSearchValue("")} />
      )}
      <label>
        <img src={darkMode ? SearchIconDarkMode : SearchIconLightMode} />
        <input
          className={
            "search_input " + (darkMode ? "search_input_dm" : "search_input_lm")
          }
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}
