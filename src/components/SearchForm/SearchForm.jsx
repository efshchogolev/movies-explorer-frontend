import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <div className='search__form-container'>
            <input className='search__input'></input>
            <button className='search__find-button'></button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  )
}

export default SearchForm