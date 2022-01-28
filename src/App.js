import "./App.scss";
import LeftNavigation from "./components/LeftNavigation/LeftNavigation";
import BooksLibrary from "./components/BooksLibrary/BooksLibrary";
import { useEffect, useState, useRef } from "react";
import BookModal from "./components/BookModal/BookModal";
import MobileTopPanel from "./components/MobileTopPanel/MobileTopPanel";
import BookImg1 from "./assets/images/book1.png";
import BookImg2 from "./assets/images/book2.png";
import BookImg3 from "./assets/images/book3.png";
import BookImg4 from "./assets/images/book4.png";

const books = [
  {
    id: 1,
    genre: "dFiction",
    author: "David Adams",
    lastOpened: "yesterday",
    readingProgress: 72,
    name: "cdfv",
    img: BookImg1
  },
  {
    id: 2,
    genre: "cFiction",
    author: "kuohjndknc oire",
    lastOpened: "yesterday",
    readingProgress: 72,
    name: "Fainrfgth",
    img: BookImg2
  },
  {
    id: 3,
    genre: "aFiction",
    author: "yuhkjmfgh",
    lastOpened: "yesterday",
    readingProgress: 72,
    name: "nrtuj",
    img: BookImg3
  },
  {
    id: 4,
    genre: "Fiction",
    author: "yukhj hujk",
    lastOpened: "yesterday",
    readingProgress: 79,
    name: "avasdv",
    img: BookImg2
  },
  {
    id: 5,
    genre: "Fiction",
    author: "werty ukfhk fyu",
    lastOpened: "yesterday",
    readingProgress: 75,
    name: "lojk",
    img: BookImg4
  },
  {
    id: 6,
    genre: "Fiction",
    author: "tyuj ryui",
    lastOpened: "yesterday",
    readingProgress: 24,
    name: "bFaith",
    img: BookImg1
  },
  {
    id: 7,
    genre: "Fiction",
    author: "rthnb ruymj",
    lastOpened: "yesterday",
    readingProgress: 46,
    name: "iol",
    img: BookImg4
  },
  {
    id: 8,
    genre: "Fiction",
    author: "rtgr rthy",
    lastOpened: "yesterday",
    readingProgress: 72,
    name: "ykjk",
    img: BookImg2
  },
  {
    id: 9,
    genre: "Fiction",
    author: "ascdsd sdf",
    lastOpened: "yesterday",
    readingProgress: 72,
    name: "Faith",
    img: BookImg3
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [openMenu, setOpenMenu] = useState(false);
  const [windowResize, setWindowResize] = useState(window.innerWidth);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowResize(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (windowResize > 1024) {
      setOpenMenu(false);
    }
  }, [windowResize]);

  function selectBook(book) {
    setSelectedBook(book);
    setOpenModal(true);
  }

  return (
    <div className="books_app" ref={ref}>
      <MobileTopPanel
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setOpenMenu={setOpenMenu}
      />
      <LeftNavigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <BooksLibrary
        books={books}
        darkMode={darkMode}
        selectBook={selectBook}
      />
      {openModal && (
        <BookModal 
          book={selectedBook} 
          setOpenModal={setOpenModal} 
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

export default App;
