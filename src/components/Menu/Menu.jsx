
import './Menu.css'

function Menu({ children }) {
  return (
    <nav className="menu">
      {children}
    </nav>
  )
}

export default Menu