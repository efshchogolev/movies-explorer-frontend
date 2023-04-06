import "./HeaderLanding.css";
import logoPath from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { PATH_HOME } from "../../utils/constants";

function HeaderLanding({ children }) {
  return (
    <header className="landing-header">
      <div className="landing-header__container">
        <Link to={PATH_HOME}>
          <img src={logoPath} alt="логотип" className="landing-header__logo" />
        </Link>
        {children}
      </div>
    </header>
  );
}

export default HeaderLanding;
