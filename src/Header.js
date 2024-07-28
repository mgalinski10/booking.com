import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { navItems } from "./resources/navItems";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header>
      <div className="header-bar">
        <div className="logo">
          <h2>Booking.com</h2>
        </div>
        <div className="bar">
          <ul className="max-width">
            <li>PLN</li>
            <li>
              <div className="poland">POL</div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleQuestion} />
            </li>
            <li>Udostępnij obiekt</li>
            <li>
              <button>Zarejestruj się</button>
            </li>
            <li>
              <button>Zaloguj się</button>
            </li>
          </ul>
          <ul className="min-width">
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-bar">
        <ul>
          {navItems.map((item) => (
            <NavItem itemObj={item} />
          ))}
        </ul>
      </div>
    </header>
  );
}
