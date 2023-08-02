import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


export default function Card (props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <>
      {isOwn && <button className="element__delete-button" type="button" onClick={handleDeleteClick}></button>}
      <img className="element__image" src={props.card.link} alt="Фотография из галереи" onClick={handleClick}/>
      <h2 className="element__name">{props.card.name}</h2>
      <div className="element__like-container">
        <button onClick={handleLikeClick} className={`element__like-button ${isLiked && 'element__like-button_activated'}`} type="button"></button>
        <h3 className="element__like-counter">{props.card.likes.length}</h3>
      </div>
    </>
  )
}
