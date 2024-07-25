import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { navItems } from "./resources/navItems";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header>
      <div className="header-bar">
        <div>
          <h2>Booking.com</h2>
        </div>
        <div>
          <ul>
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
