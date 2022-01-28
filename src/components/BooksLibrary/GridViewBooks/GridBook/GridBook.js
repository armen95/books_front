import "./gridbook.scss";
export default function GridBook({
  book,
  darkMode,
  selectBook
}) {

  return (
    <div className="book_container" onClick={() => selectBook(book)}>
      <div
        className="book_img"
        style={{ backgroundImage: "url(" + book.img + ")" }}
      >
        <div>
          <span>72%</span>
        </div>
        <div>
          <span>{book.genre}</span>
        </div>
      </div>
      <div
        className={
          "book_name_block " +
          (darkMode ? "book_name_block_dm" : "book_name_block_lm")
        }
      >
        <h2>{book.name}</h2>
        <span>{book.author}</span>
      </div>
    </div>
  );
}
