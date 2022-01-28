import "./bookslibrary.scss";
import Header from "./Header/Header";
import GridViewBooks from "./GridViewBooks/GridViewBooks";
import ListViewBooks from "./ListViewBooks/ListViewBooks";

import { useState } from "react";

export default function BooksLibrary({
  books,
  darkMode,
  selectBook
}) {
  const [gridView, setGridView] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  function filterBooks(book) {
    if (book.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div
      className={
        "book_library_container " +
        (darkMode ? "book_library_container_dm" : "book_library_container_lm")
      }
    >
      <Header
        darkMode={darkMode}
        gridView={gridView}
        setGridView={setGridView}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {gridView ? (
        <GridViewBooks
          books={books}
          darkMode={darkMode}
          filterBooks={filterBooks}
          selectBook={selectBook}
        />
      ) : (
        <ListViewBooks
          books={books}
          darkMode={darkMode}
          filterBooks={filterBooks}
          selectBook={selectBook}
        />
      )}
    </div>
  );
}
