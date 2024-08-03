import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Form() {
  return (
    <form>
      <div className="form-item">
        <div className="inside-item">
          <FontAwesomeIcon icon={faBed} />
          <input
            className="where-you-go"
            type="text"
            placeholder="Dokąd się wybierasz?"
          />
        </div>
      </div>

      <div className="form-item form-item-btn">
        <div className="inside-item">
          <FontAwesomeIcon icon={faCalendarDays} />
          Data zameld.. - Data wymeld..
        </div>
      </div>

      <div className="form-item form-item-btn">
        <div className="inside-item">
          <FontAwesomeIcon icon={faUser} />2 dorosłych - 0 dzieci - 1 pokój
        </div>
      </div>

      <div className="search-button">
        <button>Szukaj</button>
      </div>
    </form>
  );
}
