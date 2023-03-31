import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <div className="project__container">
        <div className="project__title-container">
          <h2 className="project__title">О проекте</h2>
        </div>
        <div className="project__about">
          <div className="project__text-container">
            <h3 className="project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="project__text-container">
            <h3 className="project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="project__timeline">
          <div className="project__backend-container">
            <p className="project__backend-text">1 Неделя</p>
          </div>
          <div className="project__frontend-container">
            <p className="project__frontend-text">4 Недели</p>
          </div>
          <div className="project__subtitle-container">
            <p className="project__timeline-subtitle">Back-end</p>
          </div>
          <div className="project__subtitle-container">
            <p className="project__timeline-subtitle">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
