import './ButtonMore.css'
import cn from 'classnames'

function ButtonMore({ visible }) {
  return (
    <div className='more'>
      <button className={cn('more__button', visible ? '' : 'more__button_invisible')}>Ещё</button>
    </div>
  )
}

export default ButtonMore