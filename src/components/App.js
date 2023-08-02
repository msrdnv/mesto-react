import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({src: "./", isOpen: false});

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserData()
    .then((userData) => {
      setCurrentUser(userData);
      //console.log(userData);
    })
    .catch(console.error)
  }, []);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards()
    .then((cards) => {
      setCards(cards);
      //console.log(cards);
    })
    .catch(console.error)
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({src: "./", isOpen: false});
  }

  function handleCardClick({link, name}) {
    setSelectedCard({link, name, isOpen: true});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(console.error)
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch(console.error)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="profile" button="Сохранить">
          <input id="name-input" className="popup__input" type="text" name="name" minLength="2" maxLength="40" placeholder="Имя" required/>
          <span className="name-input-error popup__error popup__error_visible"></span>
          <input id="about-input" className="popup__input" type="text" name="about" minLength="2" maxLength="200" placeholder="О себе" required/>
          <span className="about-input-error popup__error popup__error_visible"></span>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="card" button="Создать">
          <input id="card-name-input" className="popup__input" type="text" name="name" minLength="2" maxLength="30" placeholder="Название" required/>
          <span className="card-name-input-error popup__error popup__error_visible"></span>
          <input id="link-input" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required/>
          <span className="link-input-error popup__error popup__error_visible"></span>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="confirmation" button="Да"/>
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="avatar" button="Сохранить">
        <input id="avatar-link-input" className="popup__input" type="url" name="avatar" placeholder="Ссылка на новый аватар" required/>
        <span className="avatar-link-input-error popup__error popup__error_visible"></span>
      </PopupWithForm>
      <Header/>
      <Main cards={cards} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
      <Footer/>
    </CurrentUserContext.Provider>
  );
}

