import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faEarthAmericas,
  faPeopleGroup,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  { name: "Pobyty", icon: <FontAwesomeIcon icon={faBed} /> },
  { name: "Loty", icon: <FontAwesomeIcon icon={faPlane} /> },
  { name: "Lot + Hotel", icon: <FontAwesomeIcon icon={faEarthAmericas} /> },
  { name: "Atrakcje", icon: <FontAwesomeIcon icon={faPeopleGroup} /> },
  { name: "Taksówki lotniskowe", icon: <FontAwesomeIcon icon={faTaxi} /> },
];
