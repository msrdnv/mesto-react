import React from 'react';
import PopupWithForm from './PopupWithForm.js'

export default function EditAvatarPopup(props) {

  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return(
    <PopupWithForm onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit} title="Обновить аватар" name="avatar" button="Сохранить">
      <input ref={avatarRef} id="avatar-link-input" className="popup__input" type="url" name="avatar" placeholder="Ссылка на новый аватар" required/>
      <span className="avatar-link-input-error popup__error popup__error_visible"></span>
    </PopupWithForm>
  )
}
