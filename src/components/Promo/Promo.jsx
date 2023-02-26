import "./Promo.css";
import promoPath from "../../images/promo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img
          src={promoPath}
          alt="Изображение с баннера"
          className="promo__image"
        />
      </div>
    </section>
  );
}

export default Promo;
