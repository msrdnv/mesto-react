export default function ImagePopup(props) {
  return (
    <div className={props.card.isOpen ? "popup popup_type_dark image-popup popup_opened" : "popup popup_type_dark image-popup"}>
      <div className="popup__image-container">
        <img className="popup__full-image" src={props.card.link} alt="Увеличенная фотография из галереи"/>
        <button className="popup__close-icon" type="button" onClick={props.onClose}></button>
        <p className="popup__image-caption">{props.card.name}</p>
      </div>
    </div>
  )
}


