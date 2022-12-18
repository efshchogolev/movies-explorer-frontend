
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from '../Main/Main'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
