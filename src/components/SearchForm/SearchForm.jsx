
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

function SearchForm({ onSearch, inputValue, setInputValue, isActiveCheckbox, handleChangeCheckbox }) {


  function handleChangeInput(e) {
    setInputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue)
  }



  return (
    <div className='search'>
      <div className='search__container'>
        <form className='search__form' onSubmit={handleSubmit}>
          <div className='search__form-container'>
            <input className='search__input' placeholder='Фильм' required value={inputValue || ''} onChange={handleChangeInput}></input>
            <button className='search__find-button'></button>
          </div>
          <FilterCheckbox isActiveCheckbox={isActiveCheckbox} handleChangeCheckbox={handleChangeCheckbox} />
        </form>
      </div>
    </div>
  )
}

export default SearchForm