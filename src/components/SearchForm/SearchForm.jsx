import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

function SearchForm() {
  return (
    <div className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <div className='search__form-container'>
            <input className='search__input' placeholder='Фильм' required></input>
            <button className='search__find-button'></button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </div>
  )
}

export default SearchForm