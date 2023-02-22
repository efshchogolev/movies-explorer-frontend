
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from '../Main/Main'
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";
import Preloader from '../Preloader/Preloader'
import { useEffect, useState } from "react";

function App() {

  const [preloader, setPreloader] = useState(false);
  // const [localMovies, setLocalMovies] = useState([])
  const [inputValue, setInputValue] = useState('');
  // debugger
  // const [isShortFilm, setIsShortFilm] = useState(false)
  const [isActiveCheckbox, setIsActiveCheckbox] = useState(JSON.parse(localStorage.getItem('isShortFilm')))
  const [filteredMovies, setFilteredMovies] = useState([])
  const [cardListText, setCardListText] = useState('Введите название фильма')
  const [numberOfMovies, setNumberOfMovies] = useState(12)
  const [numberOfAddMovies, setNumberOfAddMovies] = useState(3)
  const [isButtonMoreVisible, setIsButtonMoreVisible] = useState(false)

  useEffect(() => {
    moviesApi.authorize("alex-5654929@mail.ru", "password")
    if (localStorage.getItem('beatFilm')) {
      handleCheckWidth()
      setInputValue(JSON.parse(localStorage.getItem('inputValue')))
      // console.log(isShortFilm)
      // setIsActiveCheckbox(JSON.parse(localStorage.getItem('isShortFilm')))
      // // console.log(isShortFilm)
      // setFilteredMovies(JSON.parse(localStorage.getItem('beatFilm')))
    }
    setIsButtonMoreVisible(true)

  }, [])

  useEffect(() => {
    setFilteredMovies(handleFilter(JSON.parse(localStorage.getItem('localMovies')), false, isActiveCheckbox))
    // localStorage.setItem('isShortFilm', JSON.stringify(isActiveCheckbox))
  }, [isActiveCheckbox])

  useEffect(() => {
    setCardListText('')
  }, [preloader])

  useEffect(() => {
    if (localStorage.getItem('beatFilm')) {
      setCardListText('Ничего не найдено')
    } else {
      setCardListText('Введите название фильма')
    }
  }, [filteredMovies])

  useEffect(() => {

    if (numberOfMovies >= JSON.parse(localStorage.getItem('filteredMovies')).length) {
      setIsButtonMoreVisible(false)
    } else {
      setIsButtonMoreVisible(true)
    }

    // setIsActiveCheckbox(JSON.parse(localStorage.getItem('isShortFilm')))
    // console.log(`Отображаемых ${numberOfMovies}`)
    // console.log(`стейт фильтрованных ${filteredMovies.length}`)
    // console.log(`в хранилище ${JSON.parse(localStorage.getItem('filteredMovies')).length}`)
  }, [numberOfMovies, filteredMovies]) //????

  function handleChangeCheckbox(e) {
    setIsActiveCheckbox(e.target.checked)
    localStorage.setItem('isShortFilm', JSON.stringify(e.target.checked))
  }

  const handleFilter = (movies, keyWord, isActiveCheckbox) => {

    if (typeof keyWord == "string") {
      movies = movies.filter(({ nameRU, nameEN }) => {
        return nameRU.toLowerCase().includes(keyWord.toLowerCase()) || nameEN.toLowerCase().includes(keyWord.toLowerCase())
      })
      localStorage.setItem('localMovies', JSON.stringify(movies))
    }

    if (isActiveCheckbox) {
      movies = handleShortFilmFilter(movies)

    }
    localStorage.setItem('filteredMovies', JSON.stringify(movies))
    handleCheckWidth()
    return movies
  }

  const handleShortFilmFilter = (movies) => {
    if (movies) {
      const shortMovies = movies.filter(({ duration }) => {
        return duration <= 40;
      })
      return shortMovies

    } else {
      return []
    }
  }

  window.addEventListener('resize', function (event) {
    setTimeout(() => {
      handleCheckWidth()
    }, 0)
  }, true);


  const handleSearch = (inputValue) => {

    if (!localStorage.getItem("beatFilm")) {
      setPreloader(true)
      console.log(preloader)
      moviesApi.getApiMovies()
        .then((res) => {
          setFilteredMovies(handleFilter(res, inputValue, isActiveCheckbox))
          localStorage.setItem("beatFilm", JSON.stringify(res));
          console.log(filteredMovies)
          localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))

        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setPreloader(false)
          console.log(preloader)
        });
    } else {
      setFilteredMovies(handleFilter(JSON.parse(localStorage.getItem("beatFilm")), inputValue, isActiveCheckbox))

    }
    // setPreloader(false)
    localStorage.setItem('inputValue', JSON.stringify(inputValue))
    localStorage.setItem('isShortFilm', JSON.stringify(isActiveCheckbox))

  }

  const handleCheckWidth = () => {
    const width = window.innerWidth

    if (width > 768) {
      setNumberOfMovies(12)
      setNumberOfAddMovies(3)
    } else if (width > 320) {
      setNumberOfMovies(8)
      setNumberOfAddMovies(2)
    } else {
      setNumberOfMovies(5)
      setNumberOfAddMovies(2)
    }
  }

  const handleDisplayMoreMovies = () => {
    setNumberOfMovies(numberOfMovies + numberOfAddMovies)
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="/movies" element={
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
            />

          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <SavedMovies onSearch={handleSearch} isLoading={preloader} inputValue={inputValue} setInputValue={setInputValue} />
            {preloader && <Preloader />}
          </>
        } />
        <Route path="/profile" element={
          <Profile />
        } />
        <Route path="/signin" element={
          <Login />
        } />
        <Route path="/signup" element={
          <Register />
        }
        />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </div>
  );
}

export default App;
