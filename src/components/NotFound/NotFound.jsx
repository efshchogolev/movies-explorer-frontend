import { Link } from "react-router-dom";
import "./NotFound.css";
import { PATH_HOME } from "../../utils/constants";

function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found__number">404</span>
      <span className="not-found__text">Страница не найдена</span>
      <Link className="not-found__link" to={PATH_HOME}>
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
