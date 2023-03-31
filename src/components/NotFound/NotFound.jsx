import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found__number">404</span>
      <span className="not-found__text">Страница не найдена</span>
      <Link className="not-found__link" to="/">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
