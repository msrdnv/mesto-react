export function ImagePopup() {
  return (
    <div className="popup popup_type_dark image-popup">
      <div className="popup__image-container">
        <img className="popup__full-image" src="./" alt="Увеличенная фотография из галереи"/>
        <button className="popup__close-icon" type="button"></button>
        <p className="popup__image-caption"></p>
      </div>
    </div>
  )
}


