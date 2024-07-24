import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

export default function App() {
  return <Header />;
}

function Header() {
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
    </header>
  );
}
