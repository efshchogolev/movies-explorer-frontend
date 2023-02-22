import './ButtonMore.css'
import cn from 'classnames'

function ButtonMore({ isButtonMoreVisible, handleDisplayMoreMovies }) {

  return (
    <div className='more'>
      <button onClick={handleDisplayMoreMovies} className={cn('more__button', isButtonMoreVisible ? '' : 'more__button_invisible')}>Ещё</button>
    </div>
  )
}

export default ButtonMore