
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from '../Main/Main'
import Header from "../Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-movies" />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
