import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="filter">
      <p className='filter__text'>Короткометражки</p>
      <label className="filter__label" for="checkbox">
        <input type="checkbox" id="checkbox" className='filter__input' />
        <div className="filter__slider round"></div>
      </label>
    </div>
  )
}

export default FilterCheckbox