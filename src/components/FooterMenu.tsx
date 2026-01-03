import { Link } from 'react-router'

const FooterMenu = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} My React Router App</p>
    </div>
  )
}

export default FooterMenu
