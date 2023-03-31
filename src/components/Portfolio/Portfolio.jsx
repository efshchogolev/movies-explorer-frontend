import "./Portfolio.css";
import arrowPath from "../../images/arrow-link.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <nav className="portfolio__navigation">
          <ul className="portfolio__nav-links">
            <li className="portfolio__list-item">
              <a
                href="https://github.com/EfimGoldfinch/how-to-learn"
                className="portfolio__link"
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт
                <img
                  src={arrowPath}
                  alt="Стрелка"
                  className="portfolio__arrow"
                />
              </a>
            </li>
            <li className="portfolio__list-item">
              <a
                href="https://github.com/EfimGoldfinch/russian-travel"
                className="portfolio__link"
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт
                <img
                  src={arrowPath}
                  alt="Стрелка"
                  className="portfolio__arrow"
                />
              </a>
            </li>
            <li className="portfolio__list-item">
              <a
                href="https://github.com/EfimGoldfinch/react-mesto-api-full"
                className="portfolio__link"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение
                <img
                  src={arrowPath}
                  alt="Стрелка"
                  className="portfolio__arrow"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;
