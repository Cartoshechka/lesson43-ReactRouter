import { NavLink } from 'react-router'
import { routes } from '../config/routes'

const Menu = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
