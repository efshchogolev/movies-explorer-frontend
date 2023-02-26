import "./FilterCheckbox.css";

function FilterCheckbox({ isActiveCheckbox, handleChangeCheckbox }) {
  return (
    <div className="filter">
      <p className="filter__text">Короткометражки</p>
      <label className="filter__label" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          className="filter__input"
          value={isActiveCheckbox}
          onChange={handleChangeCheckbox}
        />
        <div className="filter__slider round"></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
