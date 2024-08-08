import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { navItems } from "./navItems";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="upper-nav big-screen">
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

        <ul className="upper-nav small-screen">
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

        <ul className="lower-nav big-screen">
          {navItems.map((item) => (
            <NavItem itemObj={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
