import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { navItems } from "./resources/navItems";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header>
      <div className="upper-bar">
        <ul className="desktop">
          <li>
            <h2>Booking.com</h2>
          </li>
          <li>PLN</li>
          <li>POL</li>
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
        <ul className="mobile">
          <li>
            <h2>Booking.com</h2>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
      <div className="lower-bar">
        <ul className="desktop">
          {navItems.map((item) => (
            <NavItem itemObj={item} />
          ))}
        </ul>
      </div>
    </header>
  );
}
