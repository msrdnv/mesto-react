import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';

export default function App() {
  return (
    <>
      <div className="popup popup_type_dark image-popup">
        <div className="popup__image-container">
          <img className="popup__full-image" src="./" alt="Увеличенная фотография из галереи"/>
          <button className="popup__close-icon" type="button"></button>
          <p className="popup__image-caption"></p>
        </div>
      </div>
      <div className="popup profile-popup">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profile-form" noValidate>
            <input id="name-input" className="popup__input" type="text" name="name" minLength="2" maxLength="40" placeholder="Имя" required/>
            <span className="name-input-error popup__error popup__error_visible"></span>
            <input id="about-input" className="popup__input" type="text" name="about" minLength="2" maxLength="200" placeholder="О себе" required/>
            <span className="about-input-error popup__error popup__error_visible"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup card-popup">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="card-form" noValidate>
            <input id="card-name-input" className="popup__input" type="text" name="name" minLength="2" maxLength="30" placeholder="Название" required/>
            <span className="card-name-input-error popup__error popup__error_visible"></span>
            <input id="link-input" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required/>
            <span className="link-input-error popup__error popup__error_visible"></span>
            <button className="popup__submit-button" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup confirmation-popup">
        <div className="popup__container popup__container_place-confirmation">
          <button className="popup__close-icon" type="button"></button>
          <h2 className="popup__title popup__title_place-confirmation">Вы уверены?</h2>
          <form className="popup__form" name="confirmation-form" noValidate>
            <button className="popup__submit-button" type="submit">Да</button>
          </form>
        </div>
      </div>
      <div className="popup avatar-popup">
        <div className="popup__container popup__container_place-avatar">
          <button className="popup__close-icon" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="avatar-form" noValidate>
            <input id="avatar-link-input" className="popup__input" type="url" name="avatar" placeholder="Ссылка на новый аватар" required/>
            <span className="avatar-link-input-error popup__error popup__error_visible"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

