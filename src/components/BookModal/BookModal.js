import "./bookmodal.scss";
import CloseIcon from "../../assets/images/close-icon.svg";
export default function BookModal({ book, setOpenModal, darkMode }) {
  return (
    <div className={"modal_container " + (darkMode ? 'modal_container_dm' : 'modal_container_lm')}  onClick={() => setOpenModal(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="close_icon_block">
          <img src={CloseIcon} onClick={() => setOpenModal(false)} />
        </div>
        <div className="book_img_block">
          <img src={book.img} />
        </div>

        <h2 className="modal_book_name">{book.name}</h2>
        <span className="modal_book_by">{book.author}</span>
        <p className="modal_book_description">
          Hundreds of years before the Toralii attacked Earth, destroying the
          cities of Beijing, Tehran and Sydney, before they developed the
          voidwarp technology and destroyed their homeworld, they warred amongst
          themselves.
        </p>
        <div className="modal_btns">
          <button
            className="modal_close_btn"
            onClick={() => setOpenModal(false)}
          >
            Close
          </button>
          <button className="modal_reading_btn">Continue Reading</button>
        </div>
      </div>
    </div>
  );
}
