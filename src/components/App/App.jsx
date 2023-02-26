import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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

function App() {
  const [preloader, setPreloader] = useState(false);
  // const [localMovies, setLocalMovies] = useState([])
  const [inputValue, setInputValue] = useState("");
  // debugger
  // const [isShortFilm, setIsShortFilm] = useState(false)
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isActiveCheckbox, setIsActiveCheckbox] = useState(
    JSON.parse(localStorage.getItem("isShortFilm")) || false
  );
  const [savedMoviesCheckbox, setSavedMoviesCheckbox] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [cardListText, setCardListText] = useState("Введите название фильма");
  const [numberOfMovies, setNumberOfMovies] = useState(12);
  const [numberOfAddMovies, setNumberOfAddMovies] = useState(3);
  const [isButtonMoreVisible, setIsButtonMoreVisible] = useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("beatFilm")) {
      handleCheckWidth();
      setInputValue(JSON.parse(localStorage.getItem("inputValue")));
      // console.log(isShortFilm)
      // setIsActiveCheckbox(JSON.parse(localStorage.getItem('isShortFilm')))
      // // console.log(isShortFilm)
      // setFilteredMovies(JSON.parse(localStorage.getItem('beatFilm')))
    }
    setIsButtonMoreVisible(true);
  }, []);

  useEffect(() => {
    setFilteredMovies(
      handleFilter(
        JSON.parse(localStorage.getItem("localMovies")),
        false,
        isActiveCheckbox
      )
    );
    // localStorage.setItem('isShortFilm', JSON.stringify(isActiveCheckbox))
  }, [isActiveCheckbox]);

  useEffect(() => {
    setSavedMovies(
      handleFilter(
        JSON.parse(localStorage.getItem("savedMovies")),
        false,
        savedMoviesCheckbox
      )
    );
  }, [savedMoviesCheckbox]);

  useEffect(() => {
    setCardListText("");
  }, [preloader]);

  useEffect(() => {
    if (localStorage.getItem("beatFilm")) {
      setCardListText("Ничего не найдено");
    } else {
      setCardListText("Введите название фильма");
    }
  }, [filteredMovies]);

  useEffect(() => {
    mainApi
      .getUserInfoFromServer()
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        navigate("/movies");
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
    if (
      numberOfMovies >=
      JSON.parse(localStorage.getItem("filteredMovies"))?.length
    ) {
      setIsButtonMoreVisible(false);
    } else {
      setIsButtonMoreVisible(true);
    }
  }, [numberOfMovies, filteredMovies]);

  function handleChangeCheckbox(e) {
    setIsActiveCheckbox(e.target.checked);
    localStorage.setItem("isShortFilm", JSON.stringify(e.target.checked));
  }

  const handleFilter = (movies, keyWord, isActiveCheckbox) => {
    if (keyWord) {
      movies = movies.filter(
        ({ nameRU, nameEN }) =>
          nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
          nameEN.toLowerCase().includes(keyWord.toLowerCase())
      );
      localStorage.setItem("localMovies", JSON.stringify(movies));
    }

    if (isActiveCheckbox) {
      movies = handleShortFilmFilter(movies);
    }
    localStorage.setItem("filteredMovies", JSON.stringify(movies));
    handleCheckWidth();
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

  window.addEventListener(
    "resize",
    function (event) {
      setTimeout(() => {
        handleCheckWidth();
      }, 0);
    },
    true
  );

  const handleSearch = (inputValue) => {
    if (!localStorage.getItem("beatFilm")) {
      setPreloader(true);
      console.log(preloader);
      moviesApi
        .getApiMovies()
        .then((res) => {
          setFilteredMovies(handleFilter(res, inputValue, isActiveCheckbox));
          localStorage.setItem("beatFilm", JSON.stringify(res));
          console.log(filteredMovies);
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
          console.log(preloader);
        });
    } else {
      setFilteredMovies(
        handleFilter(
          JSON.parse(localStorage.getItem("beatFilm")),
          inputValue,
          isActiveCheckbox
        )
      );
    }
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
    localStorage.setItem("isShortFilm", JSON.stringify(isActiveCheckbox));
  };

  const handleSavedSearch = (inputValue) => {
    if (localStorage.getItem("savedMovies")) {
      setSavedMovies(
        handleFilter(
          JSON.parse(localStorage.getItem("savedMovies")),
          inputValue,
          isActiveCheckbox
        )
      );
    }
  };

  const handleCheckWidth = () => {
    const width = window.innerWidth;

    if (width > 768) {
      setNumberOfMovies(12);
      setNumberOfAddMovies(3);
    } else if (width > 320) {
      setNumberOfMovies(8);
      setNumberOfAddMovies(2);
    } else {
      setNumberOfMovies(5);
      setNumberOfAddMovies(2);
    }
  };

  const handleDisplayMoreMovies = () => {
    setNumberOfMovies(numberOfMovies + numberOfAddMovies);
  };

  const handleLikeCard = (movie) => {
    console.log(savedMovies);
    const isSaved = savedMovies.find((m) => m.movieId === movie.id);
    if (isSaved) {
      console.log("фильм уже сохранён");
      handleDeleteMovie(movie.id);
    } else {
      handleSaveMovie(movie);
    }
    console.log(savedMovies);
  };

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie).then((res) => {
      console.log(res);
      setSavedMovies((prev) => [...prev, res]);
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
    });
  };

  const handleDeleteMovie = (id) => {
    mainApi
      .deleteMovie(id)
      .then((res) => {
        const newSavedMovies = savedMovies.filter((m) => {
          console.log(m);
          return m.movieId !== id;
        });
        setSavedMovies(newSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (data) => {
    setErrorMessage("");
    mainApi
      .register(data.username, data.password, data.email)
      .then((res) => {
        console.log(data);
        handleLogin(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Такой пользователь уже зарегестрирован");
      });
  };

  const handleLogin = (data) => {
    setErrorMessage("");
    mainApi
      .login(data.email, data.password)
      .then((res) => {
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        setErrorMessage("Неверный email или пароль");
        console.log(err);
      });
  };

  const handleChangeProfile = (data) => {
    setProfileMessage("");
    console.log(data);
    mainApi
      .setUserInfo(data.username, data.email)
      .then(() => {
        setCurrentUser(data.username, data.email);
      })
      .then(() => {
        setProfileMessage("Данные успешно изменены");
      })
      .catch((err) => {
        console.log(err);
        setProfileMessage("Произошла ошибка");
      });
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setCurrentUser({ name: "", email: "" });
        setIsLoggedIn(false);
        navigate("/");
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

  const handleChangeSavedCheckbox = (e) => {
    setSavedMoviesCheckbox(e.target.checked);
    console.log(savedMoviesCheckbox);
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/signin"
            element={
              <Login onLogin={handleLogin} errorMessage={errorMessage} />
            }
          />
          <Route
            path="/signup"
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
              path="/movies"
              element={
                <>
                  <Movies
                    onSearch={handleSearch}
                    moviesList={filteredMovies}
                    inputValue={inputValue}
                    isActiveCheckbox={isActiveCheckbox}
                    setInputValue={setInputValue}
                    setIsActiveCheckbox={setIsActiveCheckbox}
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
              path="/saved-movies"
              element={
                <>
                  <SavedMovies
                    onSearch={handleSavedSearch}
                    inputValue={inputValue}
                    savedMoviesCheckbox={savedMoviesCheckbox}
                    setInputValue={setInputValue}
                    onChangeSavedCheckbox={handleChangeSavedCheckbox}
                    // handleChangeCheckbox={handleChangeCheckbox}
                    //
                    savedMovies={savedMovies}
                    onCountDuration={handleCountDuration}
                    onDeleteMovie={handleDeleteMovie}
                  />
                  {preloader && <Preloader />}
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onChangeProfile={handleChangeProfile}
                  profileMessage={profileMessage}
                  handleLogout={handleLogout}
                />
              }
            />
          </Route>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
