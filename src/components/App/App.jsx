import "./App.css";
import Header from "../Header/Header";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  CARD_LIST_TEXT_FAILURE,
  CARD_LIST_TEXT_INITIAL,
  CONFLICT_ERROR_MESSAGE,
  DATA_ERROR_MESSAGE,
  DESKTOP_INITIAL_MOVIES,
  DESKTOP_MIN_WIDTH,
  DESKTOP_ROW_MOVIES,
  MOBILE_INITIAL_MOVIES,
  MOBILE_MAX_WIDTH,
  MOBILE_ROW_MOVIES,
  PATH_MOVIES,
  PATH_PROFILE,
  PATH_SAVED_MOVIES,
  PATH_HOME,
  PATH_SIGNIN,
  PATH_SIGNUP,
  PROFILE_MESSAGE_FAILURE,
  PROFILE_MESSAGE_SUCCESS,
  TABLET_INITIAL_MOVIES,
  TABLET_ROW_MOVIES,
} from "../../utils/constants";

function App() {
  const [preloader, setPreloader] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isActiveCheckbox, setIsActiveCheckbox] = useState(false);
  const [savedMoviesCheckbox, setSavedMoviesCheckbox] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [cardListText, setCardListText] = useState(CARD_LIST_TEXT_INITIAL);
  const [numberOfMovies, setNumberOfMovies] = useState(12);
  const [numberOfAddMovies, setNumberOfAddMovies] = useState(3);
  const [isButtonMoreVisible, setIsButtonMoreVisible] = useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const path = useParams();

  useEffect(() => {
    const checkbox = JSON.parse(localStorage.getItem("isShortFilm"));
    if (localStorage.getItem("beatFilm")) {
      setInputValue(JSON.parse(localStorage.getItem("inputValue")));
    }
    setIsActiveCheckbox(checkbox || false);
  }, []);

  useEffect(() => {
    setFilteredMovies(
      handleFilter(
        JSON.parse(localStorage.getItem("localMovies")),
        JSON.parse(localStorage.getItem("inputValue")),
        isActiveCheckbox
      )
    );
  }, [isActiveCheckbox]);

  useEffect(() => {
    if (location.pathname === PATH_SAVED_MOVIES);
    setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (location.pathname === PATH_SIGNIN && isLoggedIn) {
      navigate(PATH_MOVIES);
    }
    if (location.pathname === PATH_SIGNUP && isLoggedIn) {
      navigate(PATH_MOVIES);
    }
  }, [location.pathname, navigate, isLoggedIn]);

  useEffect(() => {
    setSavedMovies(
      handleFilter(
        JSON.parse(localStorage.getItem("filteredSavedMovies")),
        false,
        savedMoviesCheckbox
      )
    );
  }, [savedMoviesCheckbox]);

  useEffect(() => {
    setCardListText("");
  }, [preloader]);

  useEffect(() => {
    localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    if (localStorage.getItem("beatFilm")) {
      setCardListText(CARD_LIST_TEXT_FAILURE);
    } else {
      setCardListText(CARD_LIST_TEXT_INITIAL);
    }
  }, [filteredMovies]);

  useEffect(() => {
    mainApi
      .getUserInfoFromServer()
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        navigate(path);
      })
      .catch((err) => console.log(err));
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getMovies()
        .then((data) => {
          setSavedMovies(data);
          localStorage.setItem("savedMovies", JSON.stringify(data));
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("filteredMovies")) === null) {
      setIsButtonMoreVisible(false);
    } else if (
      numberOfMovies >=
      JSON.parse(localStorage.getItem("filteredMovies"))?.length
    ) {
      setIsButtonMoreVisible(false);
    } else {
      setIsButtonMoreVisible(true);
    }
  }, [numberOfMovies, filteredMovies]);

  function handleChangeCheckbox(checked) {
    setIsActiveCheckbox(checked);
    localStorage.setItem("isShortFilm", JSON.stringify(checked));
  }

  const handleKeyWordFilter = (movies, keyWord) => {
    movies = movies.filter(
      ({ nameRU, nameEN }) =>
        nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
        nameEN.toLowerCase().includes(keyWord.toLowerCase())
    );
    return movies;
  };

  const handleFilter = (movies, keyWord, checkbox) => {
    if (keyWord) {
      movies = handleKeyWordFilter(movies, keyWord);
      localStorage.setItem("localMovies", JSON.stringify(movies));
    }

    if (checkbox) {
      movies = handleShortFilmFilter(movies);
    }
    localStorage.setItem("filteredMovies", JSON.stringify(movies));

    return movies;
  };

  const handleShortFilmFilter = (movies) => {
    if (movies) {
      const shortMovies = movies.filter(({ duration }) => {
        return duration <= 40;
      });
      return shortMovies;
    } else {
      return [];
    }
  };

  const handleSearch = (inputValue, checkbox) => {
    if (!localStorage.getItem("beatFilm")) {
      setPreloader(true);
      moviesApi
        .getApiMovies()
        .then((res) => {
          setFilteredMovies(handleFilter(res, inputValue, checkbox));
          localStorage.setItem("beatFilm", JSON.stringify(res));
          localStorage.setItem(
            "filteredMovies",
            JSON.stringify(filteredMovies)
          );
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setPreloader(false);
        });
    } else {
      setFilteredMovies(
        handleFilter(
          JSON.parse(localStorage.getItem("beatFilm")),
          inputValue,
          checkbox
        )
      );
    }
    if (inputValue) {
      localStorage.setItem("inputValue", JSON.stringify(inputValue));
      setInputValue(JSON.parse(localStorage.getItem("inputValue")));
    }
    handleCheckWidth();
  };

  const handleSavedFilter = (keyWord, checkbox) => {
    var movies;
    if (keyWord) {
      movies = handleKeyWordFilter(
        JSON.parse(localStorage.getItem("savedMovies")),
        keyWord
      );
      localStorage.setItem("filteredSavedMovies", JSON.stringify(movies));
    }

    if (checkbox) {
      movies = handleShortFilmFilter(
        JSON.parse(localStorage.getItem("filteredSavedMovies"))
      );
    }

    handleCheckWidth();
    return movies;
  };

  const handleSavedSearch = (inputValue, checkbox) => {
    if (localStorage.getItem("savedMovies")) {
      setSavedMovies(handleSavedFilter(inputValue, checkbox));
    }
  };

  const handleChangeSavedCheckbox = (checked) => {
    setSavedMoviesCheckbox(checked);
  };

  window.addEventListener(
    "resize",
    function () {
      setTimeout(() => {
        handleCheckWidth();
      }, 0);
    },
    true
  );

  function handleToggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  const handleCheckWidth = () => {
    const width = window.innerWidth;

    if (width > DESKTOP_MIN_WIDTH) {
      setNumberOfMovies(DESKTOP_INITIAL_MOVIES);
      setNumberOfAddMovies(DESKTOP_ROW_MOVIES);
    } else if (width > MOBILE_MAX_WIDTH) {
      setNumberOfMovies(TABLET_INITIAL_MOVIES);
      setNumberOfAddMovies(TABLET_ROW_MOVIES);
    } else {
      setNumberOfMovies(MOBILE_INITIAL_MOVIES);
      setNumberOfAddMovies(MOBILE_ROW_MOVIES);
    }
  };

  const handleDisplayMoreMovies = () => {
    setNumberOfMovies(numberOfMovies + numberOfAddMovies);
  };

  const handleLikeCard = (movie) => {
    const savedMovie = savedMovies.find((m) => m.movieId === movie.id);
    if (savedMovie) {
      handleDeleteMovie(savedMovie);
    } else {
      handleSaveMovie(movie);
    }
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies((prev) => [...prev, res]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(savedMovies.concat(res))
        );
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (card) => {
    mainApi
      .deleteMovie(card)
      .then((res) => {
        const newSavedMovies = savedMovies.filter((m) => {
          return m.movieId !== card.movieId;
        });
        setSavedMovies(newSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (data) => {
    setErrorMessage("");
    mainApi
      .register(data.username, data.password, data.email)
      .then(() => {
        handleLogin(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(CONFLICT_ERROR_MESSAGE);
      });
  };

  const handleLogin = (data) => {
    setErrorMessage("");
    mainApi
      .login(data.email, data.password)
      .then(() => {
        setIsLoggedIn(true);
        navigate(PATH_MOVIES);
      })
      .catch((err) => {
        setErrorMessage(DATA_ERROR_MESSAGE);
        console.log(err);
      });
  };

  const handleChangeProfile = (data) => {
    setProfileMessage("");
    mainApi
      .setUserInfo(data.username, data.email)
      .then((user) => {
        setCurrentUser({ name: user.name, email: user.email });
      })
      .then(() => {
        setProfileMessage(PROFILE_MESSAGE_SUCCESS);
      })
      .catch((err) => {
        console.log(err);
        setProfileMessage(PROFILE_MESSAGE_FAILURE);
      });
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setCurrentUser({ name: "", email: "" });
        localStorage.clear();
        setIsLoggedIn(false);
        navigate(PATH_HOME);
        setFilteredMovies([]);
        setSavedMovies([]);
        setIsActiveCheckbox(false);
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCountDuration = (duration) => {
    const hours = parseInt(duration / 60);
    const mins = duration % 60;
    if (hours === 0) {
      return `${mins}м`;
    } else if (mins === 0) {
      return `${hours}ч`;
    } else {
      return `${hours}ч ${mins}м`;
    }
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path={PATH_HOME}
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onOpenMenu={handleToggleMenu}
                isMenuOpen={isMenuOpen}
              />
            }
          />
          <Route
            path={PATH_SIGNIN}
            element={
              <Login onLogin={handleLogin} errorMessage={errorMessage} />
            }
          />
          <Route
            path={PATH_SIGNUP}
            element={
              <Register
                onRegister={handleRegister}
                errorMessage={errorMessage}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute loggedIn={isLoggedIn} />}>
            <Route
              path={PATH_MOVIES}
              element={
                <>
                  <Header
                    onOpenMenu={handleToggleMenu}
                    isMenuOpen={isMenuOpen}
                  ></Header>
                  <Movies
                    onSearch={handleSearch}
                    moviesList={filteredMovies}
                    inputValue={inputValue}
                    isActiveCheckbox={isActiveCheckbox}
                    handleChangeCheckbox={handleChangeCheckbox}
                    cardListText={cardListText}
                    preloader={preloader}
                    numberOfMovies={numberOfMovies}
                    numberOfAddMovies={numberOfAddMovies}
                    handleDisplayMoreMovies={handleDisplayMoreMovies}
                    isButtonMoreVisible={isButtonMoreVisible}
                    onLikeCard={handleLikeCard}
                    savedMovies={savedMovies}
                    onCountDuration={handleCountDuration}
                  />
                </>
              }
            />
            <Route
              path={PATH_SAVED_MOVIES}
              element={
                <>
                  <Header
                    onOpenMenu={handleToggleMenu}
                    isMenuOpen={isMenuOpen}
                  ></Header>
                  <SavedMovies
                    onSearch={handleSavedSearch}
                    isActiveCheckbox={savedMoviesCheckbox}
                    onChangeSavedCheckbox={handleChangeSavedCheckbox}
                    savedMovies={savedMovies}
                    onCountDuration={handleCountDuration}
                    onDeleteMovie={handleDeleteMovie}
                  />
                  {preloader && <Preloader />}
                </>
              }
            />
            <Route
              path={PATH_PROFILE}
              element={
                <>
                  <Header
                    onOpenMenu={handleToggleMenu}
                    isMenuOpen={isMenuOpen}
                  ></Header>
                  <Profile
                    onChangeProfile={handleChangeProfile}
                    profileMessage={profileMessage}
                    handleLogout={handleLogout}
                  />
                </>
              }
            />
          </Route>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
