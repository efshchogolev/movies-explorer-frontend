
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from '../Main/Main'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import HeaderLanding from "../HeaderLanding/HeaderLanding";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <HeaderLanding />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Header />
            <Profile />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Login />
          </>
        } />
        <Route path="/signup" element={
          <Register />
        }
        />
      </Routes>

    </div>
  );
}

export default App;
