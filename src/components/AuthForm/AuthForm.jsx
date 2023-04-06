import { Link } from "react-router-dom";
import "./AuthForm.css";
import { useForm } from "react-hook-form";
import { REGEX_EMAIL, REGEX_NAME } from "../../utils/constants";

function AuthForm({
  buttonText,
  loginPage,
  onRegister,
  errorMessage,
  onLogin,
}) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onRegisterSubmit = (data) => {
    onRegister(data);
    reset();
  };

  const onLoginSubmit = (data) => {
    onLogin(data);
    reset();
  };

  return (
    <>
      {loginPage ? (
        <>
          <form className="auth-form" onSubmit={handleSubmit(onLoginSubmit)}>
            <label htmlFor="email" className="auth-form__label">
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
                id="email"
                type="text"
                className="auth-form__input"
                placeholder="Ваш e-mail"
              ></input>
              <span className="auth-form__error-message">
                {errors?.email?.message}
              </span>
            </label>
            <label htmlFor="password" className="auth-form__label">
              Пароль
              <input
                {...register("password", {
                  required: "Это поле обязательно",
                })}
                name="password"
                id="password"
                type="password"
                className="auth-form__input auth-form__input_password"
                placeholder="Ваш пароль"
              ></input>
              <span className="auth-form__error-message">
                {errors?.password?.message}
              </span>
            </label>
            <span className="auth-form__error-message auth-form__error-message_login-api">
              {errorMessage}
            </span>
            <button
              type="submit"
              className="auth-form__button auth-form__button_login"
              disabled={!isValid}
            >
              {buttonText}
            </button>
            <p className="auth-form__text">
              Ещё не зарегестрированы?
              <Link className="auth-form__link" to="../signup">
                Регистрация
              </Link>
            </p>
          </form>
        </>
      ) : (
        <>
          <form className="auth-form" onSubmit={handleSubmit(onRegisterSubmit)}>
            <label htmlFor="name" className="auth-form__label">
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
                id="name"
                type="text"
                className="auth-form__input"
                placeholder="Ваше имя"
              />
              <span className="auth-form__error-message ">
                {errors?.username?.message}
              </span>
            </label>
            <label htmlFor="email" className="auth-form__label">
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
                id="email"
                type="text"
                className="auth-form__input"
                placeholder="Ваш e-mail"
              ></input>
              <span className="auth-form__error-message">
                {errors?.email?.message}
              </span>
            </label>
            <label htmlFor="password" className="auth-form__label">
              Пароль
              <input
                {...register("password", {
                  required: "Это поле обязательно",
                })}
                name="password"
                id="password"
                type="password"
                className="auth-form__input auth-form__input_password"
                placeholder="Ваш пароль"
              ></input>
              <span className="auth-form__error-message">
                {errors?.password?.message}
              </span>
            </label>
            <span className="auth-form__error-message auth-form__error-message_register-api">
              {errorMessage}
            </span>
            <button
              type="submit"
              className="auth-form__button auth-form__button_register"
              disabled={!isValid}
            >
              {buttonText}
            </button>
            <p className="auth-form__text">
              Уже зарегистрированы?
              <Link className="auth-form__link" to="../signin">
                Войти
              </Link>
            </p>
          </form>
        </>
      )}
    </>
  );
}

export default AuthForm;
