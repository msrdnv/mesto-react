import kusto from '../images/kusto.svg';

export function Main() {

  function handleEditAvatarClick() {
    const avatarPopup = document.querySelector('.avatar-popup')
    avatarPopup.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const profilePopup = document.querySelector('.profile-popup')
    profilePopup.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const cardPopup = document.querySelector('.card-popup')
    cardPopup.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-data">
            <img className="profile__avatar" src={kusto} alt="Аватар профиля"/>
            <button className="profile__avatar-update-icon" type="button" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__text-data">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
            <h2 className="profile__about">Исследователь океана</h2>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>

      <div className="gallery">
        <template className="element-template">
          <div className="element">
            <button className="element__delete-button" type="button"></button>
            <img className="element__image"/>
            <h2 className="element__name"></h2>
            <div className="element__like-container">
              <button className="element__like-button" type="button"></button>
              <h3 className="element__like-counter">0</h3>
            </div>
          </div>
        </template>
      </div>
    </main>
  )
};


