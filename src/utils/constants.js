const DESKTOP_MIN_WIDTH = 768;
const MOBILE_MAX_WIDTH = 320;
const DESKTOP_INITIAL_MOVIES = 12;
const DESKTOP_ROW_MOVIES = 3;
const TABLET_INITIAL_MOVIES = 8;
const TABLET_ROW_MOVIES = 2;
const MOBILE_INITIAL_MOVIES = 5;
const MOBILE_ROW_MOVIES = 2;

const PROFILE_MESSAGE_SUCCESS = "Данные успешно изменены";
const PROFILE_MESSAGE_FAILURE = "Произошла ошибка";

const CONFLICT_ERROR_MESSAGE = "Такой пользователь уже зарегестрирован";
const DATA_ERROR_MESSAGE = "Неверный email или пароль";

const CARD_LIST_TEXT_INITIAL = "Введите название фильма";
const CARD_LIST_TEXT_FAILURE = "Ничего не найдено";

const PATH_HOME = "/";
const PATH_SIGNIN = "/signin";
const PATH_SIGNUP = "/signup";
const PATH_MOVIES = "/movies";
const PATH_SAVED_MOVIES = "/saved-movies";
const PATH_PROFILE = "/profile";

const REGEX_EMAIL =
  /^(?=.{1,256})(?=.{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGEX_NAME = /^[\p{L}\s-]+$/u;

const MOVIES_API = "https://api.nomoreparties.co";
module.exports = {
  DESKTOP_MIN_WIDTH,
  MOBILE_MAX_WIDTH,
  DESKTOP_INITIAL_MOVIES,
  DESKTOP_ROW_MOVIES,
  TABLET_INITIAL_MOVIES,
  TABLET_ROW_MOVIES,
  MOBILE_INITIAL_MOVIES,
  MOBILE_ROW_MOVIES,
  CONFLICT_ERROR_MESSAGE,
  DATA_ERROR_MESSAGE,
  PROFILE_MESSAGE_SUCCESS,
  PROFILE_MESSAGE_FAILURE,
  PATH_HOME,
  PATH_SIGNIN,
  PATH_SIGNUP,
  PATH_MOVIES,
  PATH_SAVED_MOVIES,
  PATH_PROFILE,
  CARD_LIST_TEXT_INITIAL,
  CARD_LIST_TEXT_FAILURE,
  REGEX_NAME,
  REGEX_EMAIL,
  MOVIES_API,
};
