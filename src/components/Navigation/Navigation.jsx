import { Link } from "react-router-dom";
import "./Navigation.css";
import { PATH_SIGNIN, PATH_SIGNUP } from "../../utils/constants";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to={PATH_SIGNUP}>
        Регистрация
      </Link>
      <Link className="navigation__button" to={PATH_SIGNIN}>
        Войти
      </Link>
    </nav>
  );
}

export default Navigation;
