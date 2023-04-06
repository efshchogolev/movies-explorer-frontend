import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { REGEX_EMAIL, REGEX_NAME } from "../../utils/constants";

function Profile({ onChangeProfile, profileMessage, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);

  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      username: `${userName}`,
      email: `${userEmail}`,
    },
    mode: "onChange",
  });

  const onChangeProfileSubmit = (data) => {
    onChangeProfile(data);
    setUserEmail(data.email);
    setUserName(data.username);
  };

  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__hello">{`Привет, ${userName}!`}</h1>
          <form
            className="profile__form"
            onSubmit={handleSubmit(onChangeProfileSubmit)}
          >
            <div className="profile__input-container">
              <label className="profile__label_name profile__label">
                Имя
                <input
                  {...register("username", {
                    required: "Это поле обязательно",
                    minLength: {
                      value: 2,
                      message: "Минимум 2 символа",
                    },
                    maxLength: {
                      value: 30,
                      message: "Максимум 30 символов",
                    },
                    pattern: {
                      value: REGEX_NAME,
                      message: "Только кириллица, латиница, пробел или дефис",
                    },
                  })}
                  name="username"
                  className="profile__input"
                  placeholder="Ваше имя"
                ></input>
              </label>
              <span className="profile__error-message ">
                {errors?.username?.message}
              </span>
            </div>
            <div className="profile__input-container">
              <label className="profile__label profile__label_email">
                E-mail
                <input
                  {...register("email", {
                    required: "Это поле обязательно",
                    pattern: {
                      value: REGEX_EMAIL,
                      message: "Неверный email",
                    },
                  })}
                  name="email"
                  className="profile__input profile__input_email"
                  placeholder="Ваш email"
                ></input>
              </label>
              <span className="profile__error-message ">
                {errors?.email?.message}
              </span>
            </div>
            <span
              className={`profile__error-message ${
                profileMessage === "Данные успешно изменены" &&
                "profile__error-message_positive"
              }`}
            >
              {profileMessage}
            </span>
            <button
              className="profile__button"
              type="submit"
              disabled={
                !(
                  watch("email") !== userEmail || watch("username") !== userName
                ) || !isValid
              }
            >
              Редактировать
            </button>
          </form>
          <button
            className="profile__button profile__button_exit"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
