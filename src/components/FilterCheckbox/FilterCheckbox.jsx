import "./FilterCheckbox.css";

function FilterCheckbox({ formParams }) {
  return (
    <div className="filter">
      <p className="filter__text">Короткометражки</p>
      <label className="filter__label" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          className="filter__input"
          {...formParams}
        />
        <div className="filter__slider"></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
