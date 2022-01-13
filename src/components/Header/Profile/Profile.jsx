import React from "react";
import "./Profile.scss";
import defaultAvatarIcon from "../../../assets/img/default_avatar.jpg";
import exampleAvatarIcon from "../../../assets/img/avatar_example.jpg";

function Profile() {
  const [login, setLogin] = React.useState(false);

  return (
    <div className="profile">
      {login ? (
        <>
          <p className="profile__name">Denilson Fontes</p>
          <img
            src={exampleAvatarIcon}
            alt="Default Avatar Icon"
            className="profile__avatar"
          />
        </>
      ) : (
        <>
          <button className="profile__button_login">Entrar</button>
          <button className="profile__button_register">Cadastrar-se</button>
        </>
      )}
    </div>
  );
}

export default Profile;
