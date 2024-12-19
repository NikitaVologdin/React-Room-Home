interface props {
  className?: string;
}

export default function Nav({ className }: props) {
  return (
    <nav className={`nav ${className ? className : ""}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            shop
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            about
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
