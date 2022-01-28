import "./header.scss";
import ListViewIconLightMode from "../../../assets/images/list-view-icon-light-mode.svg";
import ListViewIconDarkMode from "../../../assets/images/list-view-icon-dark-mode.svg";
import GridViewIconDarkMode from "../../../assets/images/grid-view-icon-dark-mode.svg";
import GridViewIconLightMode from "../../../assets/images/grid-view-icon-light-mode.svg";
import SearchIconLightMode from "../../../assets/images/search-icon-light-mode.svg";
import SearchIconDarkMode from "../../../assets/images/search-icon-dark-mode.svg";
import MaskIcon from "../../../assets/images/icon-mask.svg";

import HeaderIcon from "./HeaderIcon/HeaderIcon";
import { useState } from "react";
import Search from "./Search/Search";

export default function Header({
  darkMode,
  gridView,
  setGridView,
  searchValue,
  setSearchValue
}) {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div>
      <div
        className={
          "books_header_container " +
          (darkMode ? "books_header_container_dm" : "books_header_container_lm")
        }
      >
        <div>
          <h1
            className={
              "book_library " +
              (darkMode ? "book_library_dm" : "book_library_lm")
            }
          >
            Book Library
          </h1>
          <HeaderIcon
            icon={MaskIcon}
            backgroundColor="rgba(12, 99, 90, 0.066666)"
          />
        </div>
        <div>
          <div className="grid_list_block">
            <HeaderIcon
              icon={darkMode ? GridViewIconDarkMode : GridViewIconLightMode}
              onClick={() => setGridView(true)}
              backgroundColor={gridView ? darkMode ? '#1E1E1E' :"#F0F0F0" : ""}
            />
            <HeaderIcon
              icon={darkMode ? ListViewIconDarkMode : ListViewIconLightMode}
              onClick={() => setGridView(false)}
              backgroundColor={!gridView ? darkMode ? '#1E1E1E' : "#F0F0F0" : ""}
            />
          </div>
          <div className="desktop_search_block">
            {!openSearch ? (
              <HeaderIcon
                icon={darkMode ? SearchIconDarkMode : SearchIconLightMode}
                backgroundColor={darkMode ? "rgb(20 20 20)" : "#F9F9F9"}
                onClick={() => setOpenSearch(!openSearch)}
              />
            ) : (
              <div className="desktop_search_input_block">
                <Search 
                  searchValue={searchValue} 
                  setSearchValue={setSearchValue} 
                  setOpenSearch={setOpenSearch}
                  openSearch={openSearch}
                  darkMode={darkMode}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mobile_search_block">
        <Search 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}  
          setOpenSearch={setOpenSearch} 
          placeholder="Search for Keywords..."
          openSearch={openSearch}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}
