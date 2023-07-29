import React from 'react';
import kusto from '../images/kusto.svg';
import { api } from '../utils/api.js';
import Card from './Card.js';

export default function Main(props) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userAbout, setUserAbout] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(kusto);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
    .then((userData) => {
      setUserName(userData.name);
      setUserAbout(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch(console.error)
  }, []);

  React.useEffect(() => {
    api.getCards()
    .then((cards) => {
      setCards(cards);
    })
    .catch(console.error)
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-data">
            <img className="profile__avatar" alt="Аватар профиля" src={userAvatar}/>
            <button className="profile__avatar-update-button" type="button" onClick={props.onEditAvatar}><div className="profile__avatar-update-icon"></div></button>
          </div>
          <div className="profile__text-data">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <h2 className="profile__about">{userAbout}</h2>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <div className="gallery">
        {cards.map((card) => (
          <div key={card._id} className="element">
            <Card onCardClick={props.onCardClick} card={card}/>
          </div>
        ))}
      </div>
    </main>
  )
};


