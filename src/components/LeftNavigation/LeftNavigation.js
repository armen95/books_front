import "./leftnavigation.scss";
import SectionListTitle from "./Section/SectionListTitle";
import PlayIconLightMode from "../../assets/images/play-icon-light-mode.svg";
import PlayIconDarkMode from "../../assets/images/play-icon-dark-mode.svg";
import PlusIconLightMode from "../../assets/images/plus-icon-light-mode.svg";
import PlusIconDarkMode from "../../assets/images/plus-icon-dark-mode.svg";
import DarkModeIcon from "../../assets/images/dark-mode-icon.svg";
import LightModeIcon from "../../assets/images/light-mode-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";

import Switch from "./Switch/Switch";

export default function LeftNavigation({
  darkMode,
  setDarkMode,
  openMenu,
  setOpenMenu
}) {
  return (
    <div
      className={
        "library_container " +
        (darkMode ? "library_container_dm" : "library_container_lm") +
        (openMenu ? " open_menu" : " close_menu")
      }
    >
      {openMenu && (
        <div
          className="menu_close_btn_block"
          onClick={() => setOpenMenu(false)}
        >
          <img src={CloseIcon} />
        </div>
      )}
      <div>
        <h2 className="section_title">Library</h2>
        <div
          className={
            "section_list " +
            (darkMode ? "selected_list_dm" : "selected_list_lm")
          }
        >
          <SectionListTitle
            icon={darkMode ? PlayIconDarkMode : PlayIconLightMode}
            title="My Books"
          />
          <span
            className={
              "my_books_count " +
              (darkMode ? "my_books_count_dm" : "my_books_count_lm")
            }
          >
            15
          </span>
        </div>
        <div className="section_list">
          <SectionListTitle
            icon={darkMode ? PlusIconDarkMode : PlusIconLightMode}
            title="Add New Books"
          />
        </div>
      </div>

      <div>
        <h2 className="section_title">Settings</h2>

        <div className="section_list">
          <SectionListTitle
            icon={darkMode ? DarkModeIcon : LightModeIcon}
            title="Dark Mode"
          />
          <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </div>
  );
}
