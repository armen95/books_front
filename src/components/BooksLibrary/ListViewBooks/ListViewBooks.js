import "./listviewbooks.scss";
import { useState } from "react";
import ListBook from "./ListBook/ListBook";
import ListBookHeader from "./ListBookHeader/ListBookHeader";

export default function ListViewBooks({
  books,
  filterBooks,
  darkMode,
  selectBook
}) {
  const [sortBooksBy, setSortBooksBy] = useState("");

  function sortBooks(a, b) {
    if (sortBooksBy === "genre") {
      return a.genre.toLowerCase() < b.genre.toLowerCase() ? -1 : 1;
    } else if (sortBooksBy === "reading-progress") {
      return a.readingProgress < b.readingProgress ? 1 : -1;
    }
    return 0;
  }

  return (
    <div className="books_lists_container">
      <ListBookHeader
        sortBooksBy={sortBooksBy}
        setSortBooksBy={setSortBooksBy}
      />
      <div className="books_lists_body">
        {books
          .filter(filterBooks)
          .sort(sortBooks)
          .map((book) => (
            <ListBook
              key={book.id}
              book={book}
              darkMode={darkMode}
              selectBook={selectBook}
            />
          ))}
      </div>
    </div>
  );
}
