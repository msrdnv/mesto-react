import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { ImagePopup } from './ImagePopup.js';
import { PopupWithForm } from './PopupWithForm.js';

export default function App() {
  return (
    <>
      <ImagePopup/>
      <PopupWithForm title="Редактировать профиль" name="profile" button="Сохранить" children={
        <>
          <input id="name-input" className="popup__input" type="text" name="name" minLength="2" maxLength="40" placeholder="Имя" required/>
          <span className="name-input-error popup__error popup__error_visible"></span>
          <input id="about-input" className="popup__input" type="text" name="about" minLength="2" maxLength="200" placeholder="О себе" required/>
          <span className="about-input-error popup__error popup__error_visible"></span>
        </>
      }/>
      <PopupWithForm title="Новое место" name="card" button="Создать" children={
        <>
          <input id="card-name-input" className="popup__input" type="text" name="name" minLength="2" maxLength="30" placeholder="Название" required/>
          <span className="card-name-input-error popup__error popup__error_visible"></span>
          <input id="link-input" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required/>
          <span className="link-input-error popup__error popup__error_visible"></span>
        </>
      }/>
      <PopupWithForm title="Вы уверены?" name="confirmation" button="Да"/>
      <PopupWithForm title="Обновить аватар" name="avatar" button="Сохранить" children={
        <>
          <input id="avatar-link-input" className="popup__input" type="url" name="avatar" placeholder="Ссылка на новый аватар" required/>
          <span className="avatar-link-input-error popup__error popup__error_visible"></span>
        </>
      }/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

