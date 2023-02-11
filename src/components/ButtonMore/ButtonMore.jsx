import './ButtonMore.css'
import cn from 'classnames'

function ButtonMore({ invisible }) {
  return (
    <div className='more'>
      <button className={cn('more__button', invisible ? '' : 'more__button_invisible')}>Ещё</button>
    </div>
  )
}

export default ButtonMore