import "./mobiletoppanel.scss";
import DarkModeIcon from "../../assets/images/light-mode-icon.svg";
import LightModeIcon from "../../assets/images/dark-mode-icon.svg";
import HamburderLightIcon from "../../assets/images/hamburger-icon-light.png";
import HamburderDarkIcon from "../../assets/images/hamburger-icon-dark.png";

export default function MobileTopPanel({ darkMode, setDarkMode, setOpenMenu }) {
  return (
    <div
      className={
        "mobile_top_panel " +
        (darkMode ? "mobile_top_panel_dm" : "mobile_top_panel_lm")
      }
    >
      <img
        src={darkMode ? HamburderLightIcon : HamburderDarkIcon}
        onClick={() => setOpenMenu(true)}
      />
      <img
        src={darkMode ? LightModeIcon : DarkModeIcon}
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}
