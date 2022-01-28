import GridBook from './GridBook/GridBook';
import './gridviewbooks.scss';

export default function GridViewBooks({books, filterBooks, darkMode, selectBook}) {
  return (
    <div className="books_container">
      {books.filter(filterBooks).map((book) => (
        <GridBook
          key={book.id}
          book={book}
          darkMode={darkMode}
          selectBook={selectBook}
        />
      ))}
    </div>
  )
}