import "./listbook.scss";
export default function Book({
  book,
  darkMode,
  selectBook
}) {

  return (
    <div
      className={
        "book_list_container " +
        (darkMode ? "book_list_container_dm" : "book_list_container_lm")
      }
      onClick={() => selectBook(book)}
    >
      <div className="book_list_image_block">
        <div
          className="book_list_img"
          style={{ backgroundImage: "url(" + book.img + ")" }}
        ></div>

        <div
          className={
            "book_list_name_block " +
            (darkMode ? "book_name_block_dm" : "book_name_block_lm")
          }
        >
          <h2>{book.name}</h2>
          <span>{book.author}</span>
        </div>
      </div>

      <div className="book_list_genre">
        <span>{book.genre}</span>
      </div>
      <div className="book_list_progression">
        <span>{book.readingProgress}%</span>
      </div>
      <div className="book_list_lastopened">
        <span>{book.lastOpened}</span>
      </div>
    </div>
  );
}
