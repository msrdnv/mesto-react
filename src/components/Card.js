export default function Card (props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <button className="element__delete-button" type="button"></button>
      <img className="element__image" src={props.card.link} alt="Фотография из галереи" onClick={handleClick}/>
      <h2 className="element__name">{props.card.name}</h2>
      <div className="element__like-container">
        <button className="element__like-button" type="button"></button>
        <h3 className="element__like-counter">{props.card.likes.length}</h3>
      </div>
    </>
  )
}
