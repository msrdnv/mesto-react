export default function PopupWithForm(props) {
  return (
    <div onMouseDown={props.onMouseDown} className={props.isOpen ? `popup ${props.name}-popup popup_opened` : `popup ${props.name}-popup`}>
       <div className={props.name === "confirmation" ? "popup__container popup__container_place-confirmation" : "popup__container" &&
       props.name === "avatar" ? "popup__container popup__container_place-avatar" : "popup__container"}>
        <button className="popup__close-icon" type="button" onClick={props.onClose}></button>
        <h2 className={props.name === "confirmation" ? "popup__title popup__title_place-confirmation" : "popup__title"}>{props.title}</h2>
        <form className="popup__form" name={`${props.name}-form`} noValidate>
          {props.children};
          <button className="popup__submit-button" type="submit">{props.button}</button>;
        </form>
      </div>
    </div>
  )
}
