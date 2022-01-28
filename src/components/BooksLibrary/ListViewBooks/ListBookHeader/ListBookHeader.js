import "./listbookheader.scss";
import SortIcon from "../../../../assets/images/sort-icon.svg";
import SortIconArrow from "../../../../assets/images/sort-icon-arrow.svg";

export default function ListBookHeader({ setSortBooksBy, sortBooksBy }) {
  function updateSortBookBy(type) {
    if (sortBooksBy === type) {
      setSortBooksBy("");
    } else {
      setSortBooksBy(type);
    }
  }

  return (
    <div className="books_lists_header">
      <div>
        <span>Book Title & Author</span>
      </div>
      <div className="books_lists_header_genre">
        <span onClick={() => updateSortBookBy("genre")}>
          Genre <img src={sortBooksBy === "genre" ? SortIconArrow : SortIcon} />
        </span>
      </div>
      <div>
        <span onClick={() => updateSortBookBy("reading-progress")}>
          Reading Progress{" "}
          <img
            src={sortBooksBy === "reading-progress" ? SortIconArrow : SortIcon}
          />
        </span>
      </div>
      <div className="books_lists_header_last_opened">
        <span>
          Last Opened{" "}
          <img src={sortBooksBy === "last_opened" ? SortIconArrow : SortIcon} />
        </span>
      </div>
    </div>
  );
}
