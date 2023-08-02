import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img className="profile__avatar" alt="Аватар профиля" src={currentUser.avatar}/>
            <button className="profile__avatar-update-button" type="button" onClick={props.onEditAvatar}><div className="profile__avatar-update-icon"></div></button>
          </div>
          <div className="profile__text-data">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <h2 className="profile__about">{currentUser.about}</h2>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <div className="gallery">
        {props.cards.map((card) => (
          <div key={card._id} className="element">
            <Card onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} card={card}/>
          </div>
        ))}
      </div>
    </main>
  )
};


